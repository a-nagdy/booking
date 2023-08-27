"use client";

const BookButton = (props) => {
  return (
    <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
      {/* <div className="flex items-end">
        <h1 className="text-3xl font-bold">$60.50</h1>
        <span className="text-base">/month</span>
      </div> */}

      <button
        type="button"
        className={`inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800 ${props.className}`}
        disabled={props.disabled}
        onClick={props.onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0 mr-3 h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        Book Now
      </button>
    </div>
  );
};

export default BookButton;
