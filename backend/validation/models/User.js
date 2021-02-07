const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userData = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  schoolCode: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  rank: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
  },
  doreg: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("staff", userData);
