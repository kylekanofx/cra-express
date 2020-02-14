const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "unprotected")));
app.use(express.static(path.join(__dirname, "build")));

app.get("/ping", (req, res) => res.send("pong"));

app.get("/protected", ({ cookies: { access = "" } }, res) => {
  console.log("accessing protected");

  if (access === "123") {
    res.sendFile(path.join(__dirname, "build", "index.html"));
    return;
  }

  res.sendFile(path.join(__dirname, "unprotected", "index.html"));
});

app.get("/unprotected", (req, res) => {
  console.log("accessing unprotected");

  res.sendFile(path.join(__dirname, "unprotected", "index.html"));
});

app.listen(process.env.PORT || 8080);
