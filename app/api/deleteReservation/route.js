import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function DELETE(req) {
  if (req.method === "DELETE") {
    try {
      const { productId } = await req.json();
      console.log("Deleting product with ID:", productId);

      const deletedReservation = await prisma.reservation.delete({
        where: {
          id: productId,
        },
      });

      console.log(deletedReservation);

      return NextResponse.json(
        { message: "Product deleted successfully" },
        { status: 200 },
        deletedReservation
      );
    } catch (error) {
      console.error("Error deleting product:", error);
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
      );
    } finally {
      await prisma.$disconnect();
    }
  } else {
    return NextResponse.json({ error: "Method not allowed" });
  }
}
