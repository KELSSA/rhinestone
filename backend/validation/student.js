const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = validateStudentInput = (data) => {
  let errors = {};
  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.country = !isEmpty(data.country) ? data.country : "";
  data.district = !isEmpty(data.district) ? data.district : "";
  data.province = !isEmpty(data.province) ? data.province : "";
  data.mother = !isEmpty(data.mother) ? data.mother : "";
  data.mphone = !isEmpty(data.mphone) ? data.mphone : "";
  data.fphone = !isEmpty(data.fphone) ? data.fphone : "";
  data.father = !isEmpty(data.father) ? data.father : "";
  data.guardian = !isEmpty(data.guardian) ? data.guardian : "";
  data.gphone = !isEmpty(data.gphone) ? data.gphone : "";
  data.dob = !isEmpty(data.dob) ? data.dob : "";

  if (!validator.isLength(data.firstname, { min: 7, max: 40 })) {
    errors.firstname = "Name must be between 2 and 30 characters";
  }

  if (!validator.isLength(data.lastname, { min: 7, max: 40 })) {
    errors.lastname = "Name must be between 2 and 30 characters";
  }
  if (!validator.isLength(data.country, { min: 7, max: 40 })) {
    errors.country = "Name must be between 2 and 30 characters";
  }
  if (!validator.isLength(data.district, { min: 7, max: 40 })) {
    errors.district = "Name must be between 2 and 30 characters";
  }
  if (!validator.isLength(data.province, { min: 7, max: 40 })) {
    errors.province = "Name must be between 2 and 30 characters";
  }
  if (!validator.isLength(data.guardian, { min: 7, max: 40 })) {
    errors.guardian = "Name must be between 2 and 30 characters";
  }

  return { errors };
};
