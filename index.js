"use strict";

const express = require("express");
const app = express();

app.use(express.static("static"))

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});


app.get("/gittigidiyor", function(req, res) {
  res.sendFile(__dirname + "/gittigidiyor.html")
})

app.get("/sellerscan", function(req, res) {
  res.sendFile(__dirname + "/sellerscan.html")
})

app.listen(1453, function () {
  console.log("Sunucu çalışıyor...");
});
