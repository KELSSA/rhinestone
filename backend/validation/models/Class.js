const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
  year: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  students: {
    type: Array,
  },
  schoolCode: {
    type: String,
    required: true,
  },
  doreg: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("classes", ClassSchema);
