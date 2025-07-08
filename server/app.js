const NODE_ENV = process.env.NODE_ENV || "development";
const path = require("path");
require("dotenv").config({ path: path.normalize(`./.env.${NODE_ENV}`) });

const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const app = express();

// Middleware
app.use(logger("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const authRoutes = require("./route/authenticate");

app.use("/api/auth", authRoutes);

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
