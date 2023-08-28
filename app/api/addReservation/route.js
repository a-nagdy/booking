import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const handler = async (req) => {
  if (req.method === "POST") {
    try {
      const { people, date, time, price, fullName, email, productName } =
        await req.json();
      // console.log("test", productName);

      const response = await prisma.Reservation.create({
        data: {
          people,
          date,
          time,
          price,
          fullName,
          email,
          productName,
        },
      });


      return NextResponse.json({
        success: "Create Successfully",
        data: response,
      });
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
