import Insider from "../components/AboutUs/AboutUs";
import Benfits from "../components/Benfits/Benfits";
import Mainbanner from "../components/Mainbanner/Mainbanner";
import PopularProducts from "../components/PopularProducts/PopularProducts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-10 px-5 sm:px-10 py-4">
      <div className="container mx-auto">
        <Mainbanner />
        <PopularProducts />
        <Benfits />
        <Insider />
      </div>
    </main>
  );
}
