import OrdersComp from "../dashboard/components/OrdersComp/OrdersComp";
import TableComponent from "../dashboard/components/OrdersComp/TableComponent";

export const getReservationData = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/getReservation",
    {
      next: { revalidate: 0 },
    }
  );
  if (res.ok) {
    // console.log(res);
    return res.json();
  }
  return [];
};

const Orders = async () => {
  const { data } = await getReservationData();

  return (
    <div className="p-10 w-full">
      {data.length === 0 ? (
        <div className="flex justify-center items-center bg-[#e7e7e7] w-full h-full text-black font-sans text-xl ">
          <h3>
            No Data Available Right Now try{" "}
            <a href={"/orders"} className="text-blue-600">
              {" "}
              Refreshing{" "}
            </a>
            the page!
          </h3>
        </div>
      ) : (
        <OrdersComp>
          {data.map((order) => (
            <TableComponent
              key={order.id}
              price={order.price}
              people={order.people}
              date={order.date}
              time={order.time}
              fullName={order.fullName}
              email={order.email}
              productName={order.productName}
              id={order.id}
            />
          ))}
        </OrdersComp>
      )}
    </div>
  );
};

export default Orders;
