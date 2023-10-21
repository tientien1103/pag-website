import Container from "@/components/common/Container";
import SubBanner from "@/components/common/SubBanner";
import ApiHub from "@/components/services/ApiHub";
import Ekyc from "@/components/services/Ekyc";
import LeadScoring from "@/components/services/LeadScoring";
import React from "react";

function ServicePage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <section className="mt-6">
        <Container>
          <SubBanner type="sản phẩm" product="ekyc - api hub - lead scoring" />
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
