const  mongoose = require('mongoose');
const Schema = mongoose.Schema
let todoSchema = new Schema({

action:{

    type:String,
    require:true
}

});

module.exports= mongoose.model('todo',todoSchema)
