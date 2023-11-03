// import Partnership from "@/components/home/Partnership";
import Banner from "@/components/home/Banner";
import Value from "@/components/home/Value";
import ProductList from "@/components/home/ProductList";
import Technology from "@/components/home/Technology";
import AboutUs from "@/components/home/AboutUs";
import Media from "@/components/home/Media";
import Container from "@/components/common/Container";
import { Locale } from "../../../i18n.config";
import { getDictionary } from "@/libs/dictionary";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  return (
    <main className="min-h-screen bg-white">
      <section className="w-full pb-24 pt-10 md:pt-24 lg:pb-60">
        <Container>
          <Banner page={page} lang={lang} />
        </Container>
      </section>

      <section className="w-full bg-gray-100 py-16">
        <Container>
          <Value page={page} />
        </Container>
      </section>

      <section className="w-full py-28">
        <Container>
          <ProductList page={page} lang={lang} />
        </Container>
      </section>

      <section className="w-full py-24">
        <Container>
          <Technology page={page} />
        </Container>
      </section>

      <section className="w-full bg-gray-200 py-32">
        <Container>
          <AboutUs page={page} />
        </Container>
      </section>

      {/* <section className="w-full pt-36">
        <Container>
          <Partnership page={page} />
        </Container>
      </section> */}

      <section className="w-full pt-36">
        <Container>
          <Media page={page} lang={lang} />
        </Container>
      </section>
    </main>
  );
}
