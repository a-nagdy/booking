import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import axios from "axios";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

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

const Register = async () => {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "ADMIN") {
    redirect("/");
  }

  return <RegisterForm />;
};

export default Register;
