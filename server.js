const fs = require("fs");
const path = require("path");
const express = require("express");
const helmet = require("helmet");
const passport = require("passport");

require("dotenv").config();

const PORT = 3000;
const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
};

const app = express();

app.use(helmet());

function checkLoggedIn(req, res, next) {
  const isLoggedIn = true;
  if (!isLoggedIn) {
    return res.status(401).json({
      message: "You must log in!",
    });
  }
  next();
}

app.get("/auth/google", (req, res) => {});
app.get("/auth/google/callback", (req, res) => {});

app.get("/secret", checkLoggedIn, (req, res) => {
  res.send("This is a secret!");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
