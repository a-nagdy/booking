import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const handler = async (req) => {
  if (req.method === "POST") {
    try {
      const { email, password, firstName, lastName, role } = await req.json();
      // console.log("test", productName);

      const response = await prisma.User.create({
        data: {
          email,
          password,
          firstName,
          lastName,
          role,
        },
      });

      return NextResponse.json(
        {
          success: "User Created Successfully",
          data: response,
        },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json({
        message: error,
      });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    return NextResponse.json(
      {
        message: "Fetch Failed",
      },
      { status: 500 }
    );
  }
};
export { handler as GET, handler as POST };
