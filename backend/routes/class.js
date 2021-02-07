const express = require("express");
const router = express.Router();
const Class = require("../models/Class");
const Student = require("../models/Student");

router.get("/", (req, res) => {
  res.send("Classes api");
});

//get classes in school
router.get("/getfrom/:school", (req, res) => {
  Class.find({ schoolCode: req.params.school })
    .then((cls) => res.send(cls))
    .catch((err) => console.log(err));
});

//get students in class
router.get("/students/:id", (req, res) => {
  let students = [];
  Class.findById(req.params.id)
    .then((cls) => {
      let i;
      for (i = 0; i < cls.students.length; i++) {
        Student.findById(cls.students[i])
          .then((student) => {
            students.push(student);
          })
          .catch((err) => console.log(err));
        // if (i === cls.students.length - 1) {
        //   res.send(students);
        // }
      }
      res.send(students);
    })
    .catch((err) => console.log(err));
});

//add a class
router.post("/addclass", (req, res) => {
  Class.create({
    year: req.body.year,
    schoolCode: req.body.schoolCode,
    name: req.body.name,
  })
    .then((clas) => {
      res.send(clas);
    })
    .catch((err) => console.log(err));
});

//add students to class
router.post("/addstudents/:id", (req, res) => {
  Class.findById(req.params.id).then((clas) => {
    let temp = [...clas.students];
    temp.push(req.body.studentId);
    Class.findByIdAndUpdate(req.params.id, { students: temp }, { new: true })
      .then((c) => res.send(c))
      .catch((err) => console.log(err));
  });
});

//remove class
router.post("/removeclass", (req, res) => {
  Class.findOneAndDelete({ _id: req.body.classId })
    .then((clas) => res.send({ success: true }))
    .catch((err) => console.log(err));
});

module.exports = router;
