const express = require('express')
const elecData = require ('../models/elec-tokens')
const jwt = require('jsonwebtoken')
const router = express.Router()
var randToken= require('rand-token').generator(
    {chars:'01345678'}
)
  

var token = randToken.generate(8)


console.log(token)


process.env.TOKEN_SECRET;

// PAY 

router.post("/pay",(req,res)=>{
    const {  username, email, meterNumber,money } = req.body;
    if (!req.body.meterNumber || !req.body.money) {
        res.status(400).json({ message: " please enter all fields" });
      }
   
    var register = new elecData();
    register.username= username;
    register.email = email;
    register.meterNumber = meterNumber;
    register.money = money;
  
    
    register.save().then((regSaved) => res.status(200).json({
        token,
        regSaved
      })
      
      );

    });

   





module.exports = router;







