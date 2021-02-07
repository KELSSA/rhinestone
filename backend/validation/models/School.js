const mongoose = require("mongoose");

const SchoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  sector: {
    type: String,
    required: true,
  },
  schoolCode: {
    type: String,
    min: 6,
    required: true,
  },
  doreg: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("schools", SchoolSchema);
