import { generateTimeOptions } from "@/app/utils/timeUtil"; // Import the time utility
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const reservedTimes = await prisma.Reservation.findMany({
        select: {
          time: true,
          date: true,
        },
      });

      const availableTimes = generateTimeOptions(reservedTimes);
      console.log(availableTimes);

      return NextResponse.json({
        reservedTimes,
        availableTimes,
      });
    } catch (error) {
      console.error(error);
      return NextResponse.json({
        error: error,
      });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 500 }
    );
  }
}
export { handler as GET };
