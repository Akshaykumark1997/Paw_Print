/* eslint-disable no-param-reassign */
const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateService(data) {
  const errors = {};
  data.name = !isEmpty(data.name) ? data.name : '';
  data.standard = !isEmpty(data.standard) ? data.standard : '';
  data.premium = !isEmpty(data.premium) ? data.premium : '';
  data.description = !isEmpty(data.description) ? data.description : '';

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'name must be between 2 to 30 chars';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'name field is required';
  }
  if (Validator.isEmpty(data.standard)) {
    errors.standard = 'price required';
  }
  if (Validator.isEmpty(data.premium)) {
    errors.standard = 'price required';
  }
  if (!Validator.isLength(data.description, { min: 2 })) {
    errors.description = 'description must be between 2 to 30 chars';
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'description field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
