import express from "express"; // import express from express module
const app = express(); // create app with express module
const port = 3000; // location of our server where we will listen to client requests


// allows our server to handle GET requests. / --> go to home page
app.get("/", (req, res) => { 
  console.log(req.rawHeaders); // tells you where your domain is, where it's being accessed, system you're running, etc
  res.send("<h1>Hello, my wonderful developer!</h1>"); // send back a response to the request. Hello will be shared on Home Page where we normally saw 'Cannot Get /' 
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Jabez</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
});


app.listen(port, () => { // listen to client requests on port and run this call back fxn when our server is setup
  console.log(`Server running on port ${port}.`);
});
