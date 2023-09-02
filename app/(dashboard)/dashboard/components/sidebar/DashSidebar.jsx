"use client";

const DashSidebar = () => {
  //   const [sidebarIsOpen, setSidebarIsOpen] = useState(true);

  //   const handleClose = () => {
  //     setSidebarIsOpen((sidebarIsOpen) => !sidebarIsOpen);
  //   };
  return (
    <div class="w-64 fixed sm:relative bg-gray-800 shadow md:h-screen flex-col justify-between hidden sm:flex h-screen">
      <div class="px-8">
        <div class="h-16 w-full flex items-center justify-center mt-10">
          <h3 className="text-3xl text-blue-500 text-center font-bold">
            Booking
          </h3>
        </div>
        <ul class="mt-12">
          <li class="flex w-full justify-between text-gray-300 cursor-pointer items-center mb-6">
            <a
              href="javascript:void(0)"
              class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-grid"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                <rect x="14" y="14" width="6" height="6" rx="1"></rect>
              </svg>
              <span class="text-sm ml-2">Orders</span>
            </a>
            <div class="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">
              5
            </div>
          </li>
          <li class="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
            <a
              href="javascript:void(0)"
              class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-puzzle"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
              </svg>
              <span class="text-sm ml-2">Register</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="px-8 border-t border-gray-700">
        <ul class="w-full flex items-center justify-between bg-gray-800">
          <li class="cursor-pointer text-white pt-5 pb-3">
            <button
              aria-label="show notifications"
              class="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-bell"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
                <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashSidebar;
