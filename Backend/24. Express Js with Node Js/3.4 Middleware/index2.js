import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;


app.use(morgan("tiny")); // use tiny output to get less loggin info
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


// We have different processes/function for middleware: pre-processing like body-parser, authentication, error handling, and logging.
// Morgan is one of the most popular logging middleware used in Express
// With every request morgan logs date-time of the request, type of request like GET, the status code, etc