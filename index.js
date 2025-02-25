// import express from "express";
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Page rendered");
});

app.listen(8000, () => {
  console.log("Backend server started");
});
