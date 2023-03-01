const validate = (values) => {
  const errors = {};
  const name = values.name.trim();
  const fileType = values.image.type;
  const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
  const description = values.description.trim();
  if (name == "") {
    errors.name = "name is required";
  } else if (!/^[A-Za-z\s]*$/.test(values.name)) {
    errors.name = "name should only contain alphabets and space";
  }
  if (values.standardPrice == "") {
    errors.standardPrice = "standard price is required";
  } else if (values.standardPrice < 0) {
    errors.standardPrice = "price should be a positive value";
  } else if (isNaN(values.standardPrice) || values.standardPrice < 1) {
    errors.standardPrice = "price should be valid number";
  }
  if (values.premiumPrice == "") {
    errors.premiumPrice = "premium price is required";
  } else if (values.premiumPrice < 0) {
    errors.premiumPrice = "price should be a positive value";
  } else if (isNaN(values.premiumPrice) || values.premiumPrice < 1) {
    errors.premiumPrice = "price should be valid number";
  }
  if (description == "") {
    errors.description = "description is required";
  }
  if (values.image == null) {
    errors.image = "image is required";
  } else if (!validImageTypes.includes(fileType)) {
    errors.image = "upload an image";
  }
  return errors;
};

export default validate;
