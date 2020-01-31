const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const dotenv = require("dotenv");
const path = require("path");

const app = express();
dotenv.config();

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.DATABASE_URL, { useNewUrlParser: true })
  .then(success => {
    console.log("Db connected");
  })
  .catch(error => {
    console.log("error connecting to the database", error);
  });

app.use("/", routes);

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => console.log(`app is running on port ${PORT}`));
