import express from "express";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url)); // we need the full file path to send the file in app.get

import bodyParser from "body-parser";


const app = express();
const port = 3000;
var bandName = '';

app.use(bodyParser.urlencoded({extended: true})); // parse the information submitted in the form


function bandNameGenerator(req, res, next) { // use the parsed information to generate the band name
  console.log(req.body);
  bandName = req.body["street"] + req.bodyy["pet"]; // this could also be placed in the post method
  next();
}

app.use(bandNameGenerator);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {  // use the full file path to send the file using dirname
  res.sendFile(__dirname + "/public/index.html");
});


app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send(`<h1>Your band name is: </h1><h2>${bandName}</h2>`); // send the bandname back to the user
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});