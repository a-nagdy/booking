import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const handler = async (req) => {
  if (req.method === "POST") {
    try {
      const { people, date, time } = await req.json();
      console.log("test", people, date, time);

      const reservedTimes = await prisma.Reservation.findMany({
        select: {
          time: true,
        },
      });

      // Check if the selected time is in the reservedTimes array
      // const isTimeReserved = reservedTimes.some(
      //   (reservedTime) => reservedTime.time === time
      // );

      // if (isTimeReserved) {
      //   return NextResponse.json(
      //     {
      //       message: "Time slot is already reserved",
      //     },
      //     { status: 400 }
      //   );
      // }

      // const availableTimes = generateTimeOptions(reservedTimes);

      const response = await prisma.Reservation.create({
        data: {
          people,
          date,
          time,
        },
      });

      return NextResponse.json({
        success: "Create Successfully",
        data: response,
        availableTimes: availableTimes,
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
