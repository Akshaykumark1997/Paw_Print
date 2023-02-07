const validate = (values) => {
  const errors = {};
  console.log(values);
  if (values.firstName == "") {
    errors.firstName = "firstname is required";
  } else if (!/^[A-Za-z\s]*$/.test(values.firstName)) {
    errors.firstName = "firstname should only contain alphabets and space";
  }
  if (values.lastName == "") {
    errors.lastName = "lastname is required";
  } else if (!/^[A-Za-z\s]*$/.test(values.lastName)) {
    errors.lastName = "lastname should only contain alphabets and space";
  }
  if (values.position == "") {
    errors.position = "position is required";
  } else if (!/^[A-Za-z\s]*$/.test(values.position)) {
    errors.position = "position should only contain alphabets and space";
  }
  if (values.genter == "") {
    errors.genter = "genter is required";
  }
  if (values.mobile == "") {
    errors.mobile = "mobile number is required";
  }
  if (values.email == "") {
    errors.email = "email is required";
  }

  return errors;
};

export default validate;
