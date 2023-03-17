const validate = (values) => {
  const errors = {};
  const name = values.name.trim();
  const petName = values.petName.trim();
  if (name == "") {
    errors.name = "name is required";
  } else if (!/^[A-Za-z\s]*$/.test(values.name)) {
    errors.name = "name should only contain alphabets and space";
  }
  if (petName == "") {
    errors.petName = "petName is required";
  } else if (!/^[A-Za-z\s]*$/.test(values.petName)) {
    errors.petName = "petName should only contain alphabets and space";
  }
  if (values.mobile == "") {
    errors.mobile = "mobile number is required";
  }
  if (values.service == "") {
    errors.service = "service is required";
  }
  if (values.email == "") {
    errors.email = "email is required";
  } else if (
    !String(values.email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    errors.email = "Invalid email address";
  }
  if (values.petDetails == "") {
    errors.petDetails = "petDetails is required";
  }
  if (values.date == "") {
    errors.date = "date number is required";
  }
  if (values.time == "") {
    errors.time = "time number is required";
  }

  return errors;
};

export default validate;
