/* eslint-disable no-useless-escape */
const validate = (values) => {
  const errors = {};
  console.log(values);
  const firstName = values.firstName.trim();
  const lastName = values.lastName.trim();
  if (firstName == "") {
    errors.firstName = "firstname is required";
  } else if (!/^[A-Za-z\s]*$/.test(values.firstName)) {
    errors.firstName = "firstname should only contain alphabets and space";
  }
  if (lastName == "") {
    errors.lastName = "lastname is required";
  } else if (!/^[A-Za-z\s]*$/.test(values.lastName)) {
    errors.lastName = "lastname should only contain alphabets and space";
  }
  if (values.mobile == "") {
    errors.mobile = "mobile number is required";
  }
  if (values.email == "") {
    errors.email = "Email is required";
  }
  if (values.houseName.trim() == "") {
    errors.houseName = "House name is required";
  } else if (!/^[A-Za-z\s]*$/.test(values.houseName)) {
    errors.houseName = "House name should only contain alphabets and space";
  }
  if (values.streetName.trim() == "") {
    errors.streetName = "Street name is required";
  } else if (!/^[A-Za-z\s]*$/.test(values.streetName)) {
    errors.streetName = "Street name should only contain alphabets and space";
  }
  if (values.city.trim() == "") {
    errors.city = "City is required";
  } else if (!/^[A-Za-z\s]*$/.test(values.city)) {
    errors.city = "City should only contain alphabets and space";
  }
  if (values.state.trim() == "") {
    errors.state = "State is required";
  } else if (!/^[A-Za-z\s]*$/.test(values.state)) {
    errors.state = "State should only contain alphabets and space";
  }
  if (values.country.trim() == "") {
    errors.country = "Country is required";
  } else if (!/^[A-Za-z\s]*$/.test(values.country)) {
    errors.country = "Country should only contain alphabets and space";
  }
  if (values.pincode == "") {
    errors.pincode = "House name is required";
  }
  if (values.petName.trim() == "") {
    errors.petName = "Street name is required";
  } else if (!/^[A-Za-z\s]*$/.test(values.petName)) {
    errors.petName = "Street name should only contain alphabets and space";
  }
  if (!/^[A-Za-z\s]*$/.test(values.petName)) {
    errors.petName = "Pet name should only contain alphabets and space";
  }
  if (!/^[A-Za-z\s]*$/.test(values.pet)) {
    errors.pet = "Pet Name should only contain alphabets and space";
  }
  if (!/^[A-Za-z\s]*$/.test(values.breed)) {
    errors.breed = "Breed should only contain alphabets and space";
  }
  if (!/^[A-Za-z\s]*$/.test(values.description)) {
    errors.description = "Description should only contain alphabets and space";
  }
  return errors;
};

export default validate;
