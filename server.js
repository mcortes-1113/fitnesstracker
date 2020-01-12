const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 4000;
const db = require("./models/");
const app = express();
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";


app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose.connect(MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.use(require("./routes/apiroutes.js"));
app.use(require("./routes/htmlroutes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});