import express from "express"; // import express from express module
const app = express(); // create app with express module
const port = 3000; // location of our server where we will listen to client requests

app.listen(port, () => { // listen to client requests on port and run this call back fxn when our server is setup
  console.log(`Server running on port ${port}.`);
});
