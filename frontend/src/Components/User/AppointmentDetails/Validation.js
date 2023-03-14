const validate = (values) => {
  const errors = {};
  var patt = /^([0-9]{11})|([0-9]{2}-[0-9]{3}-[0-9]{6})$/;
  if (values.name.trim() == "") {
    errors.name = "name is requred";
  }
  if (values.bank.trim() == "") {
    errors.bank = "bank name is required";
  }
  if (!patt.test(values.accountNumber)) {
    errors.accountNumber = "Enter a valid Account Number";
  }
  if (values.accountNumber.trim() == "") {
    errors.accountNumber = "Account Number is required";
  }
  if (values.accountNumber !== values.repeatAccountNumber) {
    errors.repeatAccountNumber = "Account Number must be same";
  }
  if (values.ifscCode.trim() == "") {
    errors.ifscCode = "Ifsc code is required";
  }

  return errors;
};
export default validate;
