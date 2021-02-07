const express = require("express");
const router = express.Router();
const Class = require("../models/Class");

router.get("/", (req, res) => {
  res.send("Classes api");
});

//add a class
router.post("/addclass", (req, res) => {
  Class.create({
    year: req.body.year,
    schoolCode: req.body.schoolCode,
    name: req.body.name,
  })
    .then((clas) => {
      console.log(clas);
      res.send({ success: true });
    })
    .catch((err) => console.log(err));
});

//remove class
router.post("/removeclass", (req, res) => {
  Class.findOneAndDelete({ _id: req.body.classId })
    .then((clas) => res.send({ success: true }))
    .catch((err) => console.log(err));
});

module.exports = router;
