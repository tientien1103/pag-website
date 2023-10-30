import Container from "@/components/common/Container";
import ApiHub from "@/components/services/ApiHub";
import Ekyc from "@/components/services/Ekyc";
import LeadScoring from "@/components/services/LeadScoring";
import { getDictionary } from "@/libs/dictionary";
import React from "react";
import { Locale } from "../../../../i18n.config";

async function ServicePage({ params: { lang } }: { params: { lang: Locale } }) {
  const { page } = await getDictionary(lang);
  return (
    <main className="min-h-screen overflow-hidden">
      <section className="mt-6">
        <Container>
          <div className="space-y-4 pt-4 text-center md:pt-10">
            <h1 className="text-center text-5xl font-bold uppercase text-primary md:text-6xl">
              {page.services.title}
            </h1>
            <p className="text-sm font-bold text-primary md:text-base">
              {page.services.subtitle}
            </p>
          </div>
        </Container>
      </section>

      <section className="mt-8 md:mt-20">
        <Container>
          <Ekyc />
        </Container>
      </section>

      <section>
        <Container>
          <ApiHub />
        </Container>
      </section>

      <section>
        <Container>
          <LeadScoring />
        </Container>
      </section>
    </main>
  );
}

export default ServicePage;
