const mongoose = require("mongoose");

const WorkSpaceSchema = new mongoose.Schema({
  name: {
    type: String,
    min: 6,
    max: 30,
    required: true,
  },
  schoolCode: {
    type: String,
    min: 6,
    required: true,
  },
  userId: {
    type: String,
    min: 6,
    required: true,
  },
  profilepic: {
    type: String,
    default: "default",
  },
  doreg: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("workspaces", WorkSpaceSchema);
