import Image from "next/image";
import Link from "next/link";
import Video from "../../../public/assets/icons/Video.png";
import Bowling from "../../../public/assets/images/hotel.png";
import Cards from "../Cards/Cards";

const Mainbanner = () => {
  return (
    <Cards className="rounded-2xl grid grid-cols-1 gap-10 lg:grid-cols-2">
      <div className="p-5 flex flex-col justify-start gap-5">
        <h1 className="font-sans text-4xl font-bold pr-18">
          Find your perfect place to stay
        </h1>
        <p>
          Step into the lane of leisure and celebration at our establishment.
          Our inviting spaces create a seamless fusion of modern sophistication
          and heartfelt welcome, setting the stage for an unforgettable bowling
          and party booking experience. Discover the harmony of elegance and
          camaraderie as you embark on a journey with us.
        </p>
        <Link href="/" className="flex items-center gap-2">
          <Image src={Video} alt={Video} />
          <span className="hover:text-main-color">Watch video</span>
        </Link>
      </div>
      <div className="h-full">
        <Image
          src={Bowling}
          className="w-full h-full flex justify-end"
          alt={Bowling}
        />
      </div>
    </Cards>
  );
};

export default Mainbanner;
