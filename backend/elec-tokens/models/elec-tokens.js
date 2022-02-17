const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let electricity = new Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    
  },
  meterNumber: {
    type: Number,
    require: true,
    maxlength:6
 
    
  },

  money:{
    type:Number,
    required:true,
    maxlength:6
   

  },

  
 
});

module.exports = mongoose.model("tokens", electricity);
