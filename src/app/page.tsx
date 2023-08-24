import Partnership from "@/components/home/Partnership";
import Banner from "@/components/home/Banner";
import Value from "@/components/home/Value";
import ProductList from "@/components/home/ProductList";
import Technology from "@/components/home/Technology";
import AboutUs from "@/components/home/AboutUs";
import Media from "@/components/home/Media";
import SubFooter from "@/components/home/SubFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="w-full pt-10 md:pt-24 pb-24 lg:pb-60">
        <div className="container max-w-7xl">
          <Banner/>
        </div>
      </section>

      <section className="w-full bg-gray-200 py-16">
        <div className="container max-w-6xl">
          <Value/>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="container max-w-7xl">
          <ProductList/>
        </div>
      </section>

      <section className="w-full py-20">
        <div className="container max-w-6xl">
          <Technology/>
        </div>
      </section>

      <section className="w-full bg-gray-200 pt-20 pb-4">
        <div className="container max-w-6xl">
          <AboutUs/>
        </div>
      </section>

      <section className="w-full pt-20">
        <h2 className="text-center text-[40px] font-bold text-primary">
          Đối tác của chúng tôi
        </h2>
        <Partnership />
      </section>

      <section className="w-full pt-20">
        <div className="container max-w-6xl">
          <Media/>
        </div>
      </section>

      <section className="h-auto w-full bg-[url(/img/home/sub-bg-footer.png)] bg-cover">
        <div className="container max-w-7xl">
          <SubFooter/>
        </div>
      </section>
    </main>
  );
}
