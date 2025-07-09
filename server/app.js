const NODE_ENV = process.env.NODE_ENV || "development";
const path = require("path");
require("dotenv").config({ path: path.normalize(`./.env.${NODE_ENV}`) });

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

const courseRouter = require("./route/course.route");
// Middleware
if (process.env.NODE_ENV === "production") {
  app.use(
    morgan("combined", {
      skip: (req) => req.url.includes("/login") || req.url.includes("/signup"),
    })
  );
} else {
  app.use(morgan("dev"));
}
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json(), (error, req, res, next) => {
  res.status(400).send("Bad Request: Invalid Json");
});

const distPath = path.resolve(__dirname, "../client/dist");

app.use(express.static(distPath));

const authRoutes = require("./route/authenticate");

app.use("/api/auth", authRoutes);
app.use("/api/course", courseRouter);

//404 handler
// app.use((req, res, next) => {
//   res.status(404).send("Not Found");
// });

app.use("/api/*", (req, res, next) => {
  next(new Error(404, `Cannot ${req.method} ${req.originalUrl}`));
});

app.use("*", (req, res, next) => {
  res.sendFile(path.resolve(distPath, "index.html"));
});

//Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

module.exports = app;
