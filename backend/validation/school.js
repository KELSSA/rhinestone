const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = validateSchoolInput = (data) => {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.province = !isEmpty(data.province) ? data.province : "";
  data.district = !isEmpty(data.district) ? data.district : "";
  data.sector = !isEmpty(data.sector) ? data.sector : "";

  if (!validator.isLength(data.name, { min: 7, max: 40 })) {
    errors.name = "Name must be between 7 and 40 characters";
  }

  if (validator.isEmpty(data.province)) {
    errors.province = "Province required";
  }

  if (validator.isEmpty(data.district)) {
    errors.district = "District required";
  }

  if (validator.isEmpty(data.sector)) {
    errors.sector = "Sector required";
  }

  return { errors };
};
