const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

router.get("/", (req, res) => {
  res.send("Student api");
});

//register a student
router.post("/register", (req, res) => {
  Student.findOne({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    country: req.body.country,
  }).then((student) => {
    if (student) {
      return res.send({ message: "Student already exits" });
    }

    Student.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      country: req.body.country,
      district: req.body.district,
      province: req.body.province,
      mothernames: req.body.mother,
      mphone: req.body.mphone,
      fathernames: req.body.father,
      fphone: req.body.fphone,
      guardian: req.body.guardian,
      gphone: req.body.gphone,
      dob: req.body.dob,
    })
      .then((student) => {
        console.log(student);
        res.send({ success: true });
      })
      .catch((err) => console.log(err));
  });
});

//Delete a student
router.post("/remove/:studentId", (req, res) => {
  Student.findByIdAndDelete({ _id: studentId })
    .then((student) => res.send({ success: true }))
    .catch((err) => console.log(err));
});

//Get all students by year
router.get("/all/:year", (req, res) => {
  Student.find()
    .then((students) => {
      console.log(students);
      res.send(students);
    })
    .catch((err) => console.log(err));
});

//Edit student
router.put("/update", (req, res) => {
  Student.findOneAndUpdate(
    { _id: req.studentId },
    { $set: req.body },
    { new: true }
  )
    .then((student) => {
      console.log(student);
      res.send({ succes: true });
    })
    .catch((err) => console.log(err));
});
module.exports = router;
