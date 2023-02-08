const validate = (values) => {
  const errors = {};
  console.log(values);
  if (values.name == "") {
    errors.name = "name is required";
  } else if (!/^[A-Za-z\s]*$/.test(values.name)) {
    errors.name = "name should only contain alphabets and space";
  }
  if (values.standard == "") {
    errors.standard = "standard price is required";
  } else if (values.standard < 0) {
    errors.standard = "price should be a positive value";
  }
  if (values.premium == "") {
    errors.premium = "premium price is required";
  } else if (values.premium < 0) {
    errors.premium = "price should be a positive value";
  }
  if (values.description == "") {
    errors.description = "description is required";
  }
  if (values.image == "") {
    errors.image = "image is required";
  }
  return errors;
};

export default validate;
