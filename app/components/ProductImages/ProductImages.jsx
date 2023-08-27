import Image from "next/image";
import BowlingTest from "../../../public/assets/images/bowlingTest.jpg";

const ProductImages = () => {
  return (
    <div className="lg:col-span-3 lg:row-end-1">
      <div className="lg:flex lg:items-start">
        <div className="lg:order-2 lg:ml-5">
          <div className="max-w-xl overflow-hidden rounded-lg">
            <Image
              className="h-full w-full max-w-full object-cover"
              src={BowlingTest}
              alt=""
            />
          </div>
        </div>

        <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
          <div className="flex flex-row items-start lg:flex-col">
            <button
              type="button"
              className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center"
            >
              <Image
                className="h-full w-full object-cover"
                src={BowlingTest}
                alt=""
              />
            </button>
            <button
              type="button"
              className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
            >
              <Image
                className="h-full w-full object-cover"
                src={BowlingTest}
                alt=""
              />
            </button>
            <button
              type="button"
              className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
            >
              <Image
                className="h-full w-full object-cover"
                src={BowlingTest}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
