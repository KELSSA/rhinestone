const express = require('express');
 const cors = require('cors');
 const bodyParser = require('body-parser');
 const app = express();
 require('../backend/userAuth/config/mongodb');
 require('../backend/todo/config/mongodb');
 const router = require('../backend/todo/routes/todo');
 const route= require('../backend/userAuth/routes/auth');

 app.use(cors());
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:true}));
 app.use('/todo',router);
 app.use('/user',route)


 const port = 500;
 app.listen( port,function(){
     console.log(" you are connecting on port"+port)
 })