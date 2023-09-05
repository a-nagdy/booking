import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Login from "@/app/components/Login/Login";
import { getServerSession } from "next-auth";
import "./dashboard.css";

const DashBoardHome = async (req, res) => {
  const session = await getServerSession(authOptions);
  return (
    <>
      <Login sessionRole={session.user.role} />
    </>
  );
};
export default DashBoardHome;
