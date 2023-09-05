import axios from "axios";
import RegisterForm from "../components/RegisterForm/RegisterForm";

export async function onSubmit(values, { isSubmitting }) {
  try {
    const response = await axios.post("/api/addUser", values);
    if (response.status === 200) {
      console.log("registration Successfuly");
    } else {
      console.log("Registration Failed");
    }
  } catch (error) {
    console.log(error);
  }
}

const Register = () => {
  return <RegisterForm />;
};

export default Register;
