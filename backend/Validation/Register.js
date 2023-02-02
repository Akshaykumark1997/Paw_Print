/* eslint-disable no-param-reassign */
const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateRegisterInput(data) {
  const errors = {};
  data.userName = !isEmpty(data.userName) ? data.userName : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.mobile = !isEmpty(data.mobile) ? data.mobile : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.confirmPassword = !isEmpty(data.confirmPassword)
    ? data.confirmPassword
    : '';

  if (!Validator.isLength(data.userName, { min: 2, max: 30 })) {
    errors.userName = 'Name must be between 2 to 30 chars';
  }

  if (Validator.isEmpty(data.userName)) {
    errors.userName = 'Name field is required';
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

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must have 6 chars';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  if (!Validator.isLength(data.confirmPassword, { min: 6, max: 30 })) {
    errors.confirmPassword = 'Password must have 6 chars';
  }

  if (!Validator.equals(data.password, data.confirmPassword)) {
    errors.confirmPassword = 'Password and Confirm Password must match';
  }

  if (Validator.isEmpty(data.confirmPassword)) {
    errors.confirmPassword = 'Password is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
