import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LoadingSpinner from "@/app/components/Loading/LoadingSpinner";
import axios from "axios";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";
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

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <RegisterForm />
    </Suspense>
  );
};

export default Register;
