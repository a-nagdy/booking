import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getReservationData } from "@/app/utils/getReservationData";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import OrdersComp from "../../components/OrdersComp/OrdersComp";
import TableComponent from "../../components/OrdersComp/TableComponent";

const Orders = async () => {
  const data = await getReservationData();
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "ADMIN") {
    redirect("/");
  }
  return (
    <div className="p-10 w-full">
      {data.length === 0 ? (
        <div className="flex justify-center items-center bg-[#e7e7e7] w-full h-full text-black font-sans text-xl ">
          <h3>
            No Data Available Right Now. Try{" "}
            <a href="/orders" className="text-blue-600">
              {" "}
              Refreshing{" "}
            </a>{" "}
            the page!
          </h3>
        </div>
      ) : (
        <OrdersComp>
          {data.map((order) => (
            <TableComponent
              key={order._id}
              price={order.price}
              people={order.people}
              date={order.date}
              time={order.time}
              fullName={order.fullName}
              email={order.email}
              productName={order.productName}
              id={order._id}
            />
          ))}
        </OrdersComp>
      )}
    </div>
  );
};

export default Orders;
