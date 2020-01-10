// const db = require('../models');

// module.exports = function (app) {

// app.get("/api/workouts", (req, res) => {
//     db.Workout.find({})
//       .then(function(workouts) {
//       res.json(workouts)
//     }).catch(err => {
//       res.json(err);
//     });
//   });



//     //put
//     app.put("/api/workouts/:id", function (req, res) {
//         db.Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}}) 
//             .then(dbWorkout => {
//                 res.json(dbWorkout);
//             })
//             .catch(err => {
//                 res.json(err);
//             });
//     });

//     //post //addbutton //
//     app.post("/api/workouts", function (req, res) {
//         db.Workout.create(body)
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.json(err);
//         });
//     });

//     //get
//     app.get("/api/workouts/range", function (req, res) {
//         db.Workout.find({})
//         .populate("workouts")
//         .then(dbWorkout => {
//             res.send(dbWorkout);
//         })
//         .catch(err => {
//             res.send(err);
//         });
        
//     });

// app.get("/api/workouts", function (req, res) {
//     db.Workout.find({})
//     .then(dbWorkout => {
//         console.log(dbWorkout)
//         res.json(dbWorkout);
//     })
//     .catch(err => {
//         res.json(err);
//     });
// });

// }



const router = require("express").Router();
const Workout = require("../models/workout.js");





router.get("/api/workouts", (req, res) => {
  Workout.find()
  .then(dbWorkouts => {
    res.json(dbWorkouts);
  }).catch(err => {
    res.json(err)
  })
});

router.post("/api/workouts", (req, res) => {
  Workout.create({})
  .then(dbWorkouts => {
    res.json(dbWorkouts);
  }).catch(err => {
    res.json(err)
  })
});

router.put("/api/workouts/:id", ({body, params}, res) => {
  Workout.findByIdAndUpdate(
    params.id, 
    { $push: { exercises: body } }, 
    { new: true, runValidators: true }
  ).then(dbworkouts => {
    res.json(dbworkouts);
  }).catch(err => {
    res.json(err)
  })
})


router.get("/api/workouts/range", ({ query }, res) => {
  Workout.find( { day: { $gte: query.start, $lte: query.end } })
  .then(dbworkouts => {
    res.json(dbworkouts);
  }).catch(err => {
    res.json(err)
  })
})

router.delete("/api/workouts", ({ body }, res) => {
  Workout.findByIdAndDelete(body.id)
  .then(() => {
    res.json(true)
  }).catch(err => {
    res.json(err)
  })
})

module.exports = router;







// app.get("/api/workouts", (req, res) => {
//     db.Workout.find({})
//       .then(function(workouts) {
//       res.json(workouts)
//     }).catch(err => {
//       res.json(err);
//     });
//   });
  
//   app.put("api/workouts", (req, res) => {
//     db.Workout.findByIdAndUpdate(req.params.id, req.params.body)
//       .then(function(workouts) {
//         res.json(workouts)
//       }).catch(err => {
//         res.json(err);
//       });
//   });
  
//   app.post("api/workouts", (req, res) => {
//     db.Workout.create(body)
//       .then(function(workouts) {
//         res.json(workouts)
//       }).catch(err => {
//         res.json(err);
//       });
//   });
  
//   app.get("api/workouts/range", (req, res) => {
    
//   })
  
//   app.get("/", (req, res) => {
//     db.Workout.find({})
//     .then(function(workouts) {
//     res.json(workouts)
//   }).catch(err => {
//     res.json(err);
//   });
//   })