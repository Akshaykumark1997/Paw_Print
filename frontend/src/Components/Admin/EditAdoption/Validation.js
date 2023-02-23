const validate = (values) => {
  const errors = {};
  if (values.petName == "") {
    errors.petName = "Pet name is required";
  } else if (!/^[A-Za-z\s]*$/.test(values.petName)) {
    errors.name = "name should only contain alphabets and space";
  }
  if (values.age == "") {
    errors.age = "age is required";
  } else if (values.age < 0) {
    errors.standard = "price should be a positive value";
  } else if (isNaN(values.age) || values.age < 1) {
    errors.age = "age should be valid number";
  }
  if (values.breed == "") {
    errors.breed = "Breed is required";
  } else if (!/^[A-Za-z\s]*$/.test(values.breed)) {
    errors.breed = "Breed should only contain alphabets and space";
  }
  if (values.vaccinated == "") {
    errors.vaccinated = "vaccinated is required";
  }
  if (values.description == "") {
    errors.description = "description is required";
  }
  if (values.image == null) {
    errors.image = "image is required";
  }
  return errors;
};
export default validate;
