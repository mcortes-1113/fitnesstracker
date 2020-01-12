const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
  .then(workouts => {
    res.json(workouts);
  }).catch(err => {
    res.json(err)
  })
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({}).sort({ day: -1})
  .then(workouts => {
    res.json(workouts);
  }).catch(err => {
    res.json(err)
  })
});

router.post("/api/workouts", (req, res) => {
  db.Workout.create(body)
  .then(workouts => {
    res.json(workouts);
  }).catch(err => {
    res.json(err)
  })
});

router.put("/api/workouts/:id", ({body, params}, res) => {
  db.Workout.findByIdAndUpdate(params.id, 
    { exercises: body }
  ).then(workouts => {
    res.json(workouts);
  }).catch(err => {
    res.json(err)
  })
})



module.exports = router;