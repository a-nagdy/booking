export default function login_validate(values) {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i) {
    errors.email = "Invalid email address";
  }
  // password validation
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Must Be greater Than 8 and less than 20 Characters long";
  } else if (values.password.includes(" ")) {
    errors.password = "invalid Password";
  }

  if (!values.confPassword) {
    errors.confPassword = "Required";
  } else if (values.confPassword !== values.password) {
    errors.confPassword = "Passwords should be similar";
  } else if (
    values.confPassword.length < 8 ||
    values.confPassword.length > 20
  ) {
    errors.confPassword =
      "Must Be greater Than 8 and less than 20 Characters long";
  } else if (values.confPassword.includes(" ")) {
    errors.confPassword = "invalid Password";
  }

  return errors;
}
