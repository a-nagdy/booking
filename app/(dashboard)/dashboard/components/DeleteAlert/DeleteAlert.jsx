import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
const DeleteAlert = ({ onClose, onDelete }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 font-sans"
      onClick={onClose}
    >
      <div className="bg-white rounded-lg shadow-lg flex justify-center items-center flex-col gap-5 p-10 relative">
        <h1 className="text-red-500 text-2xl">
          <ErrorOutlineIcon className="text-red-500 text-[6rem]" />
        </h1>
        <h2 className="text-2xl font-bold mb-4">
          Are You Sure You Want Delete This Item?
        </h2>
        <div className="flex justify-end items-end gap-3 w-full">
          <button
            onClick={onClose}
            className="border border-gray-600 p-3 rounded-md text-black hover:bg-gray-400 hover:text-white"
          >
            Cancel
          </button>
          <button
            className="text-white bg-red-700 p-3 rounded-md hover:bg-red-800"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAlert;
