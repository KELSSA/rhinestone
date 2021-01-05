const express = require('express');
const bcrypt = require('bcrypt');
let userData= require('../models/userSchema');
const jwt  = require('jsonwebtoken');
const router  = express.Router();
const dotenv  = require('dotenv');
const validator = require('validator');
dotenv.config();

process.env.TOKEN_SECRET;

// test if  api works
router.get('/',(req,res)=>{
    res.send(" user registartion and login api works");
})


//register new user

router.post( '/register',async(req,res)=>{
   const {firstname,lastname,schoolCode,email,password} = req.body;

   //check if user already exists
   const user =  await userData.findOne({email:req.body.email})
   if( !req.body.email || !req.body.password){res.status(400).json({ message:" please enter all fields"}); }
   if(user){  return res.status(400).json({ message:" user already exists"}) }
   if( password.length<6){  return  res.status(400).json({  message:"password: 6+ characters"});}
   if(!validator.isEmail(req.body.email)){ return  res.status(400).json({message:" invalid email"}); }
   

   
   //validate email
   



  
   //hash password
   const salt = await bcrypt.genSalt(10);
   const hashPassword = await bcrypt.hash(password,salt );

   //create new user
   var register  = new userData( );
   register.firstname = firstname
   register.lastname = lastname
   register.schoolCode = schoolCode
   register.password = hashPassword
   register.email=email

   register.save()
   .then( regSaved => res.send(regSaved))
   .catch(err=>res.send(err))
})

//login and token registration
router.post('/login',async(req,res)=>{

    //check if the user is  registered and verify messages
    let user =  await userData.findOne({email:req.body.email})
    
    
    if( !req.body.email || !req.body.password){res.status(400).json({ message:" please enter all fields"}); }
    if(!user){  return  res.status(400).json({ message:" user does not exist"}) }
    // compare passwords

    const validPassword = await bcrypt.compare( req.body.password,user.password)
    if(!validPassword){ return  res.status(400).json({ message:"invalid email or password"})}

    //create a token
    
    const payload = {firstname:user.firstname,lastname:user.lastname,schoolCode:user.schoolCode,email:user.email}
    const token = jwt.sign( payload,process.env.TOKEN_SECRET,{expiresIn:'1800s'});
   res.status(200).json({
       token:token,
       message:" now you logged into rhinestone"
   });

})

// user logout

router.post( '/logout',(req,res)=>{

    
})






module.exports = router;



