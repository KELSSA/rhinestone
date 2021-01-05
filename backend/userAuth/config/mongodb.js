const mongoose  = require('mongoose');
mongoose.pluralize();
mongoose.connect( ' mongodb://localhost/rhinestone',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log(" you are connected to rhinestone"))
.catch( err=>console.log("failed to connect"))
require('../models/userSchema')
