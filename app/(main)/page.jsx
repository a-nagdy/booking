import Insider from "../components/AboutUs/AboutUs";
import Benfits from "../components/Benfits/Benfits";
import Mainbanner from "../components/Mainbanner/Mainbanner";
import PopularProducts from "../components/PopularProducts/PopularProducts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-10 px-48 py-4">
      <Mainbanner />
      <PopularProducts />
      <Benfits />
      <Insider />
    </main>
  );
}
