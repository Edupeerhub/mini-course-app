const NODE_ENV = process.env.NODE_ENV || "development";
const path = require("path");
require("dotenv").config({ path: path.normalize(`./.env.${NODE_ENV}`) });

const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const app = express();

const courseRouter = require("./route/course.route");
// Middleware
app.use(logger("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json(), (error, req, res, next) => {
  res.status(400).send("Bad Request: Invalid Json");
});

app.get("/", (req, res) => {
  res.send("Welcome to the Course CRUD App!");
});

app.use("/course", courseRouter);

//404 handler
app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

//Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

module.exports = app;
