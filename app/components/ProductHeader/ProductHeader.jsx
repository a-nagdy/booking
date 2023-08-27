import Link from "next/link";

const ProductHeader = ({ productName }) => {
  return (
    <nav className="flex">
      <ol role="list" className="flex items-center">
        <li className="text-left">
          <div className="-m-1">
            <Link
              href="/"
              className="rounded-md p-1 text-sm font-medium text-gray-200 focus:text-gray-100 focus:shadow hover:text-gray-300"
            >
              Home
            </Link>
          </div>
        </li>

        <li className="text-left">
          <div className="flex items-center">
            <span className="mx-2 text-gray-400">/</span>
            <div className="-m-1">
              <p className="rounded-md p-1 text-sm font-medium text-gray-200 focus:text-gray-100 focus:shadow hover:text-gray-300">
                {productName}
              </p>
            </div>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default ProductHeader;
