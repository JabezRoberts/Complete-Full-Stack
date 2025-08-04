//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url)); // we need the full file path to send the file in app.get

import bodyParser from "body-parser";


const app = express();
const port = 3000;
var password = "ILoveProgramming"; // our password
var userIsAuthorized = false; // user is not authorized by default

app.use(bodyParser.urlencoded({extended: true})); // parse the password submitted in the form to check if it matches the password

// body-parser is now part of express so you can write app.use(express.urlenconded({ extended: true }));

function passwordChecker(req, res, next) {
    const user_entry = req.body["password"]; // get the password entered by the user from the body of the logged in
    if (user_entry === password) { // check if user password is equal to the password
        userIsAuthorized = true; 
    }
    next(); 
}

app.use(passwordChecker)

app.get("/", (req, res) => {  // the get route to our home page sends the file that is our index.bi-filetype-html
// when they visit our home page our get route handles that 
// user can complete the form and when they do the form will be submitted to "/check" using the post method
  res.sendFile(__dirname + "/public/index.html");
});


app.post("/check", (req, res) => {
  if (userIsAuthorized) { // now we check if that request is coming from an authenticated user
    res.sendFile(__dirname + "/public/secret.html"); // send them to the secret.html page if they are authenticated
  } else {
    res.sendFile(__dirname + "/public/index.html"); // send them to home page if they aren't authenticated. we can use res.redicrect("/") for this but we haven't learned it yet
  }
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});