const express = require("express");
const router = express.Router();
// const { body, validationResult } = require("express-validator");
const validateSchoolInput = require("../validation/school");
const _ = require("lodash");
const School = require("../models/School");
// const { v4: uuidv4 } = require("uuid");
var uniqid = require("uniqid");

router.get("/", (req, res) => {
  res.send("This is the school api");
});

//register school
router.post("/register", (req, res) => {
  const { errors } = validateSchoolInput(req.body);
  if (!_.isEmpty(errors)) {
    return res.send(errors).status(400);
  }
  let code = uniqid();
  School.create({
    name: req.body.name,
    province: req.body.province,
    district: req.body.district,
    sector: req.body.sector,
    schoolCode: code,
  })
    .then((school) => res.send({ success: true, schoolcode: code }))
    .catch((err) => console.log(err));
});

module.exports = router;
