export default function login_validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i) {
    errors.email = "Invalid email address";
  }

  //   if (!values.password) {
  //     errors.password = "Required";
  //   } else if (values.password.length < 6 || values.password.length > 20) {
  //     errors.password = "Must Be greater Than 8 and less than 20 Characters long";
  //   } else if (values.password.includes(" ")) {
  //     errors.password = "invalid Password";
  //   }

  return errors;
}
