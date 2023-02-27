const path = require("path");
const express = require("express");
const morgan = require("morgan");

const { engine } = require("express-handlebars");

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, "public")));
//HTTP logger
app.use(morgan("combined"));

//Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  return res.render("home");
});

app.get("/news", (req, res) => {
  return res.render("news");
});
// 127.0.0.1
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
