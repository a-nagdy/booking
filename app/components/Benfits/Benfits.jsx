import Image from "next/image";
import Link from "next/link";
import breakfast from "../../../public/assets/icons/cappuccino 1.svg";
import gym from "../../../public/assets/icons/dumbell 1.svg";
import ellipsis from "../../../public/assets/icons/ellipsis 1.svg";
import flash from "../../../public/assets/icons/flash (1) 1.svg";
import parking from "../../../public/assets/icons/parking-area (1) 1.svg";
import swim from "../../../public/assets/icons/swimmer 1.svg";
import Wifi from "../../../public/assets/icons/wifi (2) 1.svg";
import workspace from "../../../public/assets/icons/workspace 1.svg";

const Benfits = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 font-sans place-items-center">
      <div className="flex justify-center items-start flex-col gap-10 lg:col-span-1">
        <h3 className='className="font-sans text-4xl font-bold text-white'>
          We do our best facilities provide you
        </h3>
        <p className="text-white">
          Discover Your Ideal Haven: Find Your Perfect Stay at Golden Sands
          Resort
        </p>
        <Link
          href="/"
          className="text-white bg-[#FF7665CC] rounded-lg p-3 text-center"
        >
          Contact Now
        </Link>
      </div>
      <div className="flex">
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-5 place-content-center lg:grid-cols-3 xl:grid-cols-4">
          <li className="bg-white border border-[#E8E8E8] p-5 rounded-md flex justify-center flex-col items-center text-center gap-5">
            <Image src={workspace} alt={workspace} />
            Private Workspace
          </li>
          <li className="bg-white border border-[#E8E8E8] p-5 rounded-md flex justify-center flex-col items-center text-center gap-5">
            <Image src={parking} alt={parking} />
            Parking Area
          </li>
          <li className="bg-white border border-[#E8E8E8] p-5 rounded-md flex justify-center flex-col items-center text-center gap-5">
            <Image src={breakfast} alt={breakfast} />
            Breakfast
          </li>
          <li className="bg-white border border-[#E8E8E8] p-5 rounded-md flex justify-center flex-col items-center text-center gap-5">
            <Image src={Wifi} alt={Wifi} />
            Free Wifi
          </li>
          <li className="bg-white border border-[#E8E8E8] p-5 rounded-md flex justify-center flex-col items-center text-center gap-5">
            <Image src={flash} alt={flash} />
            Free Electricity
          </li>
          <li className="bg-white border border-[#E8E8E8] p-5 rounded-md flex justify-center flex-col items-center text-center gap-5">
            <Image src={swim} alt={swim} />
            Swimming Pool
          </li>
          <li className="bg-white border border-[#E8E8E8] p-5 rounded-md flex justify-center flex-col items-center text-center gap-5">
            <Image src={gym} alt={gym} />
            exercise Space
          </li>
          <li className="bg-white border border-[#E8E8E8] p-5 rounded-md flex justify-center flex-col items-center text-center gap-5">
            <Image src={ellipsis} alt={ellipsis} />
            Other Service
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Benfits;
