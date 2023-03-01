const validate = (values) => {
  const errors = {};
  console.log(values);
  const firstName = values.firstName.trim();
  const lastName = values.lastName.trim();
  const position = values.position.trim();
  const fileType = values.image.type;
  const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
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
  if (position == "") {
    errors.position = "position is required";
  } else if (!/^[A-Za-z\s]*$/.test(values.position)) {
    errors.position = "position should only contain alphabets and space";
  }
  if (values.genter == "") {
    errors.genter = "genter is required";
  }
  if (values.password == "") {
    errors.password = "password is required";
  }
  if (values.email == "") {
    errors.email = "email is required";
  }
  if (values.image == null) {
    errors.image = "image is required";
  } else if (!validImageTypes.includes(fileType)) {
    errors.image = "upload an image";
  }

  return errors;
};

export default validate;
