/* eslint-disable no-param-reassign */
const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateEmployee(data) {
  const errors = {};
  data.name = !isEmpty(data.name) ? data.name : '';
  data.petName = !isEmpty(data.petName) ? data.petName : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.mobile = !isEmpty(data.mobile) ? data.mobile : '';
  data.petDetails = !isEmpty(data.petDetails) ? data.petDetails : '';
  data.date = !isEmpty(data.date) ? data.date : '';
  data.time = !isEmpty(data.time) ? data.time : '';

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 to 30 chars';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }
  if (!Validator.isLength(data.petName, { min: 2, max: 30 })) {
    errors.petName = 'Pet name  must be between 2 to 30 chars';
  }

  if (Validator.isEmpty(data.petName)) {
    errors.petName = 'pet name field is required';
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  }

  if (!Validator.isMobilePhone(data.mobile)) {
    errors.mobile = 'mobile number invalid';
  }

  if (Validator.isEmpty(data.mobile)) {
    errors.mobile = 'mobile is required';
  }
  if (Validator.isEmpty(data.petDetails)) {
    errors.petDetails = 'pet details is required';
  }
  if (Validator.isEmpty(data.date)) {
    errors.date = 'date is required';
  }
  if (Validator.isEmpty(data.time)) {
    errors.time = 'time is required';
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
