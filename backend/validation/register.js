const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = validateRegisterInput = (data) => {
  let errors = {};
  data.names = !isEmpty(data.names) ? data.names : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!validator.isLength(data.names, { min: 7, max: 40 })) {
    errors.names = "Name must be between 2 and 30 characters";
  }

  if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password field is required";
  }

  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return { errors };
};
