/* eslint-disable no-param-reassign */
const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateEmployee(data) {
  const errors = {};
  data.petName = !isEmpty(data.petName) ? data.petName : '';
  data.age = !isEmpty(data.age) ? data.age : '';
  data.breed = !isEmpty(data.breed) ? data.breed : '';
  data.vaccinated = !isEmpty(data.vaccinated) ? data.vaccinated : '';
  data.description = !isEmpty(data.description) ? data.description : '';

  if (!Validator.isLength(data.petName, { min: 2, max: 30 })) {
    errors.petName = 'Pet name  must be between 2 to 30 chars';
  }
  if (Validator.isEmpty(data.petName)) {
    errors.petName = 'pet name field is required';
  }
  if (Validator.isEmpty(data.age)) {
    errors.age = 'age field is required';
  }
  if (Validator.isNumeric(data.age, { no_symbols: false })) {
    errors.age = 'age should be valid';
  }
  if (Validator.isEmpty(data.breed)) {
    errors.breed = 'breed field is required';
  }
  if (Validator.isEmpty(data.vaccinated)) {
    errors.vaccinated = 'vaccinated field is required';
  }
  if (Validator.isEmpty(data.description)) {
    errors.description = 'description is required';
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
