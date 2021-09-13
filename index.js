require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./app/views"));

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "app/public")));

const router = require("./app/router");
app.use(router);

app.listen(PORT, () => {
  console.log(`Serveur sur le PORT : ${PORT}`);
});
