/* eslint-disable no-param-reassign */
const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateEmployee(data) {
  const errors = {};
  data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
  data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
  data.mobile = !isEmpty(data.mobile) ? data.mobile : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.houseName = !isEmpty(data.houseName) ? data.houseName : '';
  data.streetName = !isEmpty(data.streetName) ? data.streetName : '';
  data.city = !isEmpty(data.city) ? data.city : '';
  data.state = !isEmpty(data.state) ? data.state : '';
  data.country = !isEmpty(data.country) ? data.country : '';
  data.pincode = !isEmpty(data.pincode) ? data.pincode : '';
  data.petName = !isEmpty(data.petName) ? data.petName : '';

  if (!Validator.isLength(data.firstName, { min: 2, max: 30 })) {
    errors.firstName = 'First Name must be between 2 to 30 chars';
  }
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = 'First Name field is required';
  }
  if (!Validator.isLength(data.lastName, { min: 2, max: 30 })) {
    errors.lastName = 'Last Name must be between 2 to 30 chars';
  }
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = 'Last Name field is required';
  }
  if (!Validator.isMobilePhone(data.mobile)) {
    errors.mobile = 'mobile number invalid';
  }

  if (Validator.isEmpty(data.mobile)) {
    errors.mobile = 'mobile is required';
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  }
  if (Validator.isEmpty(data.houseName)) {
    errors.houseName = 'House name is required';
  }
  if (Validator.isEmpty(data.streetName)) {
    errors.streetName = 'Street name is required';
  }
  if (Validator.isEmpty(data.city)) {
    errors.city = 'City is required';
  }
  if (Validator.isEmpty(data.state)) {
    errors.state = 'State is required';
  }
  if (Validator.isEmpty(data.country)) {
    errors.country = 'Country is required';
  }
  if (Validator.isEmpty(data.pincode)) {
    errors.pincode = 'Pincode is required';
  }
  if (!Validator.isLength(data.petName, { min: 2, max: 30 })) {
    errors.petName = 'Pet name  must be between 2 to 30 chars';
  }

  if (Validator.isEmpty(data.petName)) {
    errors.petName = 'pet name field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
