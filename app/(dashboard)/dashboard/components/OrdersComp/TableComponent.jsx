const TableComponent = ({
  price,
  people,
  date,
  time,
  fullName,
  email,
  productName,
}) => {
  return (
    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
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
      <td className="px-6 py-3">
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </a>
      </td>
    </tr>
  );
};

export default TableComponent;
