import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const handler = async (req) => {
  if (req.method === "GET") {
    try {
      const response = await prisma.Reservation.findMany({
        select: {
          people: true,
          date: true,
          time: true,
          price: true,
          fullName: true,
          email: true,
          productName: true,
        },
      });

      return NextResponse.json({
        success: "Fetched Successfully",
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
export { handler as GET };
