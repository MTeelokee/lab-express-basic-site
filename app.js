const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/works.html");
});

app.get("/pictures", (req, res) => {
  res.sendFile(__dirname + "/views/pictures.html");
});

const port = process.env.PORT || 8003;
app.listen(port, () => console.log(`Server running at port: ${port}`));
