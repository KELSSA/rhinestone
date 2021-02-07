const express = require("express");
const router = express.Router();
const WorkSpace = require("../models/WorkSpace");
const validator = require("validator");
const _ = require("lodash");
const path = require("path");
const multer = require("multer");

const DIR = "/home/ic/Documents/Rhinestone/backend/public/";

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, DIR + "wprofile");
  },
  filename: function (req, file, cb) {
    cb(null, "wprofile-" + Date.now() + path.extname(file.originalname));
  },
});

var upload = multer({ storage: storage });

let pic = "default";

router.get("/", (req, res) => {
  res.send("This is the workspace");
});

//get image
router.post("/profilepic", upload.single("wprofile"), async (req, res) => {
  if (req.file) {
    pic = req.file.path;
  }
  res.send({ success: true, picpath: path.basename(pic) });
});

//create workspace
router.post("/newspace", (req, res) => {
  let errors = {};
  if (validator.isEmpty(req.body.name)) {
    errors.wname = "Workspace name required";
  }
  if (!validator.isLength(req.body.name, { min: 7, max: 30 })) {
    errors.wname = "Workspace name length must be btn 7 and 30";
  }
  if (!_.isEmpty(errors)) {
    return res.send(errors).status(400);
  }
  WorkSpace.create({
    name: req.body.name,
    schoolCode: req.body.schoolcode,
    userId: req.body.userId,
    profilepic: pic,
  })
    .then((space) => res.send({ success: true }))
    .catch((err) => console.log(err));
});

module.exports = router;
