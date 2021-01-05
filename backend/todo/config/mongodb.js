const mongoose = require('mongoose');
mongoose.pluralize();
mongoose.connect('mongodb://localhost/rhinestone',{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false})
.then(()=>console.log(" you have connected to the db successfully"))
.catch(err=>console.log(" failed to connect to the db"));
require('../models/schema');