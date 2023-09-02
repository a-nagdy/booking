import OrdersComp from "../components/OrdersComp/OrdersComp";
import TableComponent from "../components/OrdersComp/TableComponent";

const getReservationData = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/getReservation",
    {
      method: "GET",
      next: { revalidate: 10 },
    }
  );
  if (res.ok) {
    console.log(res);
    return res.json();
  }
  return [];
};

const Granted = async () => {
  const { data } = await getReservationData();
  console.log(data);

  return (
    <div className="p-10 w-full">
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
          />
        ))}
      </OrdersComp>
    </div>
  );
};

export default Granted;
