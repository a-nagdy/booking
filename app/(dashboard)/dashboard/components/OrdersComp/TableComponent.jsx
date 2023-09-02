"use client";
import LoadingSpinner from "@/app/components/Loading/LoadingSpinner";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DeleteAlert from "../DeleteAlert/DeleteAlert";
const TableComponent = ({
  price,
  people,
  date,
  time,
  fullName,
  email,
  productName,
  id,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const router = useRouter();
  const onCloseHandler = () => {
    setIsDeleted(false);
  };
  const onShowHandler = () => {
    setIsDeleted(true);
  };
  const productData = {
    productId: id,
  };
  const onDeleteHandler = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(`/api/deleteReservation`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json", // Specify JSON content type
        },
        body: JSON.stringify(productData), // Send productData as JSON
      });
      console.log(response);

      if (response.status === 200) {
        const responseData = await response.json();
        console.log(responseData.message);
        // Optionally, update the UI or show a success message
      } else {
        console.log("Error deleting product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      console.log("Error deleting product");
    } finally {
      router.refresh();
      setIsLoading(false);
    }
  };
  return (
    <>
      {isLoading && <LoadingSpinner />}
      {isDeleted && (
        <DeleteAlert onClose={onCloseHandler} onDelete={onDeleteHandler} />
      )}
      <tr className="bg-[#e7e7e7] dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600 my-10">
        <th
          scope="row"
          className="px-6 py-3 font-medium text-gray-950 whitespace-nowrap dark:text-white"
        >
          {productName}
        </th>
        <td className="px-6 py-3">{people}</td>
        <td className="px-6 py-3 dark:text-white text-black">
          {time} | {date}
        </td>
        <td className="px-6 py-3 dark:text-white text-black">{fullName}</td>
        <td className="px-6 py-3 dark:text-white text-black">{email}</td>
        <td className="px-6 py-3 text-green-500">{price} LE</td>
        <td className="px-6 py-3 flex gap-3">
          <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
            Edit
          </button>
          <button
            className="font-medium text-red-600 dark:text-red-500"
            onClick={onShowHandler}
          >
            <DeleteForeverIcon />
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableComponent;
