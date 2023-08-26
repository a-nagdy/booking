import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Image from "next/image";
import Link from "next/link";
import BowlingTest from "../../../public/assets/images/bowlingTest.jpg";
import Slider from "../Slider/Slider";
const PopularProducts = () => {
  const DUMMY_DATA = [
    {
      name: "test",
      price: "100",
      time: "30min",
      people: "Up to 8",
      img: BowlingTest,
      id: "1",
    },
    {
      name: "test2",
      price: "100",
      time: "30min",
      people: "Up to 8",
      img: BowlingTest,
      id: "2",
    },
    {
      name: "test3",
      price: "100",
      time: "30min",
      people: "Up to 8",
      img: BowlingTest,
      id: "3",
    },
    {
      name: "test3",
      price: "100",
      time: "30min",
      people: "Up to 8",
      img: BowlingTest,
      id: "4",
    },
    {
      name: "test4",
      price: "100",
      time: "30min",
      people: "Up to 8",
      img: BowlingTest,
      id: "5",
    },
    {
      name: "test5",
      price: "100",
      time: "30min",
      people: "Up to 8",
      img: BowlingTest,
      id: "6",
    },
  ];

  return (
    <section>
      <h1 className="font-bold font-xl text-white">Our Most Popular Games</h1>
      <div className="flex justify-end mb-5">
        <button className="bg-[#FF766566] p-2 px-4 rounded-md hover:bg-white hover:text-black transition ease-in-out delay-150 text-white">
          View all
        </button>
      </div>
      <div>
        <Slider count={5} delay={3500}>
          {DUMMY_DATA.map((item) => (
            <div
              className="flex flex-col justify-center bg-[#FAFAFA] rounded-xl"
              key={item.id}
            >
              <Link href={item.name}>
                <Image src={item.img} alt={item.img} />
                <div className="p-3 flex flex-col justify-center gap-5">
                  <h3 className="text-black text-xl font-bold">{item.name}</h3>
                  <div className="flex justify-between items-center ">
                    <p className="text-green-400">
                      {item.price} LE
                      <span className="ml-1 text-slate-500">
                        /{item.people}
                      </span>
                    </p>
                    <p className="text-black">
                      {item.time} <AccessTimeIcon />
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PopularProducts;
