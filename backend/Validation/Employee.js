/* eslint-disable no-param-reassign */
const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateEmployee(data) {
  const errors = {};
  data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
  data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
  data.position = !isEmpty(data.position) ? data.position : '';
  data.genter = !isEmpty(data.genter) ? data.genter : '';
  data.email = !isEmpty(data.genter) ? data.email : '';
  data.mobile = !isEmpty(data.mobile) ? data.mobile : '';

  if (!Validator.isLength(data.firstName, { min: 2, max: 30 })) {
    errors.firstName = 'first name must be between 2 to 30 chars';
  }

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = 'first name field is required';
  }
  if (!Validator.isLength(data.lastName, { min: 2, max: 30 })) {
    errors.lastName = 'last  must be between 2 to 30 chars';
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = 'last name field is required';
  }
  if (!Validator.isLength(data.position, { min: 2, max: 30 })) {
    errors.position = 'position must be between 2 to 30 chars';
  }

  if (Validator.isEmpty(data.position)) {
    errors.position = 'position field is required';
  }
  if (Validator.isEmpty(data.genter)) {
    errors.genter = 'genter field is required';
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
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
