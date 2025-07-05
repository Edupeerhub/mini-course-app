require("dotenv").config();
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const app = express();

// Middleware
app.use(logger("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const authRoutes = require("./route/auth");

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Course CRUD App!");
});

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
