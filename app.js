const express = require("express");
const app = express();

//API 1
app.get("/", (request, response) => {
  response.send("Home Page");
});

//API 2
app.get("/about", (request, response) => {
  response.send("About Page");
});

app.listen(3000);
module.exports = app;
