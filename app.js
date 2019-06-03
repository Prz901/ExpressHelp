const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static("./public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require("./controllers"));

app.listen(5000, () => console.log("listening"));
