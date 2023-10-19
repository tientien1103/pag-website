import Partnership from "@/components/home/Partnership";
import Banner from "@/components/home/Banner";
import Value from "@/components/home/Value";
import ProductList from "@/components/home/ProductList";
import Technology from "@/components/home/Technology";
import AboutUs from "@/components/home/AboutUs";
import Media from "@/components/home/Media";
import Container from "@/components/common/Container";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="w-full pb-24 pt-10 md:pt-24 lg:pb-60">
        <Container>
          <Banner />
        </Container>
      </section>

      <section className="w-full bg-gray-100 py-16">
        <Container>
          <Value />
        </Container>
      </section>

      <section className="w-full py-28">
        <Container>
          <ProductList />
        </Container>
      </section>

      <section className="w-full py-24">
        <Container>
          <Technology />
        </Container>
      </section>

      <section className="w-full bg-gray-200 py-32">
        <div className="container max-w-6xl">
          <AboutUs />
        </div>
      </section>

      <section className="w-full pt-36">
        <Container>
          <Partnership />
        </Container>
      </section>

      <section className="w-full pt-36">
        <Container>
          <Media />
        </Container>
      </section>
    </main>
  );
}
