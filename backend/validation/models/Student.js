const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Student = new Schema({
  firstname: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  mothernames: {
    type: String,
    require: true,
  },
  mphone: {
    type: String,
    require: true,
  },
  fathernames: {
    type: String,
    require: true,
  },
  fphone: {
    type: String,
    require: true,
  },
  guardian: {
    type: String,
    require: true,
  },
  gphone: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
  province: {
    type: String,
    require: true,
  },
  district: {
    type: String,
    require: true,
  },
  schoolCode: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    require: true,
  },
  profile: {
    type: String,
  },
  doreg: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("students", Student);
