var router = require("express").Router();
var path = require("path");

router.get("/stats", function (req, res) {
    console.log("stats route");
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

router.get("/exercise", function (req, res) {
    console.log("made it");
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

router.get("/", function (req, res) {
    console.log("home");
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;