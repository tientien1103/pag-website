import SubBanner from "@/components/common/SubBanner";
import ApiHub from "@/components/services/ApiHub";
import Ekyc from "@/components/services/Ekyc";
import LeadScoring from "@/components/services/LeadScoring";
import React from "react";

function ServicePage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <section className="mt-6">
        <div className="container max-w-6xl">
          <SubBanner type="sản phẩm" product="ekyc - api hub - lead scoring" />
        </div>
      </section>

      <section className="mt-8 md:mt-20">
        <div className="container max-w-7xl md:mx-20 lg:mx-36">
          <Ekyc />
        </div>
      </section>

      <section>
        <div className="container max-w-7xl md:mx-20 lg:mx-36">
          <ApiHub />
        </div>
      </section>

      <section>
        <div className="container max-w-7xl md:mx-20 lg:mx-36">
          <LeadScoring />
        </div>
      </section>
    </main>
  );
}

export default ServicePage;
