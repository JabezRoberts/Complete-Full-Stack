import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next) { // made our own middleware - fxn that takes a req, response object, and next object
  // this middleware just does some logging fxns
  console.log("Request Method: ", req.method); // log the request method
  console.log("Request URL: ", req.url); // log the request url
  // the next method just says we are done with our middleware fxns so move to the next step of handling that request.
  next();
}

// if there is another middleware here we will go to this next middleware 

// now use the middleware
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


// we can also create our own middleware
// In all these middleware we use the app.use method to specify a middleware to use when the request comes in and inside there we can pass in a fxn that has a request, a response object, and a next method

// The next function tells us when to move on from the middleware and move on the next function or server hanlers like GET POST PUT