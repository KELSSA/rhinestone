const express = require("express");
const bcrypt = require("bcrypt");
let userData = require("../models/User.js");
const jwt = require("jsonwebtoken");
const router = express.Router();
const dotenv = require("dotenv");
const validator = require("validator");
const _ = require("lodash");

const validateRegisterInput = require("../validation/register");
dotenv.config();

process.env.TOKEN_SECRET;

let pic = "default";
// test if  api works
router.get("/", (req, res) => {
  res.send(" user registartion and login api works");
});

//register new user

router.post("/register", async (req, res) => {
  const { firstname, lastname, schoolCode, email, password } = req.body;

  //check if user already exists
  const user = await userData.findOne({ email: req.body.email });
  if (!req.body.email || !req.body.password) {
    res.status(400).json({ message: " please enter all fields" });
  }
  if (user) {
    return res.status(400).json({ message: " user already exists" });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: "password: 6+ characters" });
  }
  if (!validator.isEmail(req.body.email)) {
    return res.status(400).json({ message: " invalid email" });
  }

  //validate email

  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  //create new user
  var register = new userData();
  register.firstname = firstname;
  register.lastname = lastname;
  register.schoolCode = schoolCode;
  register.password = hashPassword;
  register.email = email;
  register.rank = req.body.rank;

  register
    .save()
    .then((regSaved) => res.send(regSaved))
    .catch((err) => res.send(err));
});

//login and token registration
router.post("/login", async (req, res) => {
  //check if the user is  registered and verify messages
  let user = await userData.findOne({ email: req.body.email });

  if (!req.body.email || !req.body.password) {
    res.status(400).json({ message: " please enter all fields" });
  }
  if (!user) {
    return res.status(400).json({ message: " user does not exist" });
  }
  // compare passwords

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).json({ message: "invalid email or password" });
  }

  //create a token

  const payload = {
    firstname: user.firstname,
    lastname: user.lastname,
    schoolCode: user.schoolCode,
    email: user.email,
    rank: user.rank,
  };
  const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: "24h",
  });
  res.status(200).json({
    token: token,
    rank: user.rank,
    message: " now you logged into rhinestone",
  });
});

//temporary :: register master
router.post("/register/master", (req, res) => {
  const { errors } = validateRegisterInput(req.body);
  if (!_.isEmpty(errors)) {
    return res.send(errors).status(400);
  }
  userData
    .findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        errors.email = "Email already used";
        return res.send(errors).status(400);
      }
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) throw err;
          let fullname = req.body.names.split(" ");
          userData
            .create({
              firstname: fullname[0],
              lastname: fullname[1],
              email: req.body.email,
              password: hash,
              rank: "master",
              schoolCode: "holdonforend",
            })
            .then((user) =>
              res.send({ success: true, userId: user._id, picpath: pic })
            )
            .catch((err) => console.log(err));
        });
      });
    })
    .catch((erro) => console.log(erro));
});

//Set master schoolcode
router.post("/addcode", (req, res) => {
  userData
    .findByIdAndUpdate(
      { _id: req.body.userId },
      { schoolCode: req.body.code },
      { new: true }
    )
    .then((user) => res.send({ success: true }))
    .catch((err) => console.log(err));
});
// user logout

router.post("/logout", (req, res) => {});

module.exports = router;
