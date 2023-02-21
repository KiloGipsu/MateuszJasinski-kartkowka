const express = require("express");
const app = express();
const json = require("./data.json");
const db = require("./database");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/kalkulator", (req, res) => {
  res.sendFile(__dirname + "/kalk.html");
});
app.get("/programowanie", (req, res) => {
  res.sendFile(__dirname + "/programowanie.html");
});
app.get("/cpp", (req, res) => {
  db.get(`Select name,description from user where id=1`, function (err, result, fields) {
    if (err) throw err;
    res.send(JSON.stringify(result));
  });
});
app.get("/js", (req, res) => {
  db.get(`Select name,description from user where id=3`, function (err, result, fields) {
    if (err) throw err;
    res.send(JSON.stringify(result));
  });
});
app.get("/cs", (req, res) => {
  db.get(`Select name,description from user where id=2`, function (err, result, fields) {
    if (err) throw err;
    res.send(JSON.stringify(result));
  });
});
app.get("/tatry", (req, res) => {
  res.sendFile(__dirname + "/tatry.html");
});
app.get("/kontakt", (req, res) => {
  res.json(json);
});

app.listen(3000);
