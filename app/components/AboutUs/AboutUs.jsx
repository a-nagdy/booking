import Image from "next/image";
import Link from "next/link";
import Bowling from "../../../public/assets/images/hotel.png";
import Cards from "../Cards/Cards";

const AboutUs = () => {
  return (
    <Cards className="my-10 rounded-3xl grid grid-cols-1 gap-1 lg:grid-cols-2">
      <div className="h-full">
        <Image
          src={Bowling}
          className="w-full h-full flex justify-end"
          alt="Bowling"
        />
      </div>
      <div className="p-5 flex flex-col justify-start gap-5">
        <h1 className="font-sans text-4xl font-bold ">Discover our History</h1>
        <p>
          Golden Sands Resort has a rich history dating back over a century.
          Originally a grand mansion, it transformed into a distinguished hotel.
        </p>
        <p>
          Welcoming esteemed guests and witnessing significant moments, it has
          evolved while preserving its historic charm. Today, it stands as an
          icon of luxury, offering a perfect blend of heritage and contemporary
          hospitality.
        </p>
        <Link href="/" className="flex items-center gap-2">
          <span className="text-white rounded-md p-2 bg-[#FF7665]">
            Explore More
          </span>
        </Link>
      </div>
    </Cards>
  );
};

export default AboutUs;
