const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models/");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.get("/api/workouts", (req, res) => {
  db.Workout.find({}).then(function(workouts) {
    // console.log(req);
    // console.log(res);
    res.json(workouts);
  }).catch(err => {
    console.log(err);
  });
});

app.put("api/workouts", (req, res) => {

})

app.post("api/workouts", (req, res) => {

})

app.get("api/workouts/range", (req, res) => {
  
})

app.get("/", (req, res) => {
  
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});