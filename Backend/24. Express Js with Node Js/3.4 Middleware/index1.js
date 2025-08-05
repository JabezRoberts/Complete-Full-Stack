import express from "express";

// the next three lines are used to figure out the path of your directory/folder. They will figure it out for you
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

import bodyParser from "body-parser";


const app = express();
const port = 3000;

// the line below gives all our request objects a body we can tap into
app.use(bodyParser.urlencoded({extended : true})); // use body parser to parse the information that comes in from the form on index.html then add that data to the request object (req.body) and so app.post will be able to access it and log it

app.get("/", (req, res) => {  
  res.sendFile(__dirname + "/public/index.html");
});


app.post("/submit", (req, res) => { // when the form is submitted with action="/submit" in index.html this is the path that will process the POST request
  // so we need a route handler capable of processing that request to the "/submit" path
  console.log(req.body); // req.body we get a body because of bodyParser
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// a middleware sits between the server and the route handlers like GET PUT POST when a request comes in
//  The middleware works on the request before it gets processed by PUT GET etc
// The middleware can preprocess the request and change aspects of the request before it goes to routing, it can handle logging, authentication, and identtify and process any requests before they go through

// When you submit for eg a login form, use something like body parser to parse the body of that request and get access to the info that was input in the form