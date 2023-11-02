import { getDictionary } from "@/libs/dictionary";
import Image from "next/image";
import React from "react";
import { Locale } from "../../../../i18n.config";

async function EkycDetail({ params: { lang } }: { params: { lang: Locale } }) {
  const { page } = await getDictionary(lang);
  return (
    <main className="min-h-screen overflow-hidden">
      <section className="mt-12">
        <div className="container max-w-6xl">
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-center text-5xl font-bold text-primary md:text-6xl">
              {page.ekyc_detail.title}
            </h1>
            <p className="mdtext-3xl text-2xl font-bold text-primary">
              {page.ekyc_detail.subTitle}
            </p>
            <p className="mx-7 w-full text-center text-sm font-bold tracking-wider text-secondary md:mx-0 md:max-w-[500px] md:text-base md:tracking-normal">
              {page.ekyc_detail.description}
            </p>
          </div>
        </div>
      </section>

      <section className="pt-24 md:py-24">
        <div className="container flex max-w-6xl flex-col justify-around md:flex-row">
          <div className="relative h-[289px] w-[300px] self-center">
            <Image
              src="/img/ekyc-detail/customer.png"
              alt=""
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="mx-5 mt-4 max-w-[700px] space-y-5 md:mt-0">
            <h3 className="text-center text-xl font-bold text-primary md:text-start md:text-4xl">
              {page.ekyc_detail.kyc.question}
            </h3>
            <p className="text-justify text-neutral-500">
              {page.ekyc_detail.kyc.definition}
            </p>

            <h3 className="text-center text-xl font-bold text-primary md:text-start md:text-4xl">
              {page.ekyc_detail.ekyc.question}
            </h3>
            <p className="text-justify text-neutral-500">
              {page.ekyc_detail.ekyc.definition}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container flex max-w-6xl flex-col-reverse justify-around md:flex-row">
          <div className="mx-5 mt-4 max-w-[700px] space-y-5 md:mt-0">
            <h3 className="text-center text-xl font-bold text-primary md:text-start md:text-3xl">
              {page.ekyc_detail.technology.title}
            </h3>
            <p className="text-justify text-neutral-500">
              {page.ekyc_detail.technology.technology1}
            </p>
            <p className="text-justify text-neutral-500">
              {page.ekyc_detail.technology.technology2}
            </p>
            <p className="text-justify text-neutral-500">
              {page.ekyc_detail.technology.technology3}
            </p>
            <p className="text-justify text-neutral-500">
              {page.ekyc_detail.technology.technology4}
            </p>
          </div>

          <div className="relative h-[289px] w-[300px] self-center">
            <Image
              src="/img/ekyc-detail/process.png"
              alt=""
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container max-w-6xl">
          <h3 className="text-center text-xl font-bold text-primary md:text-4xl">
            {page.ekyc_detail.benefit.title}
          </h3>
          <div className="mt-8 flex flex-col justify-around lg:flex-row">
            <div className="relative h-[215px] w-[394px] self-center md:h-[350px] md:w-[550px] lg:h-[500px]">
              <Image
                src="/img/ekyc-detail/benefit.png"
                alt=""
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="space-y-5 lg:max-w-[500px]">
              <h6 className="font-bold text-neutral-500">
                {page.ekyc_detail.benefit.item1.title}
              </h6>
              <ul className="ml-10 list-disc">
                <li className="text-justify text-neutral-500">
                  {page.ekyc_detail.benefit.item1.benefit1}
                </li>
                <li className="text-justify text-neutral-500">
                  {page.ekyc_detail.benefit.item1.benefit2}
                </li>
                <li className="text-justify text-neutral-500">
                  {page.ekyc_detail.benefit.item1.benefit3}
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 flex flex-col justify-around md:flex-row-reverse">
            <div className="relative h-[182px] w-[300px] self-center">
              <Image
                src="/img/ekyc-detail/cost.png"
                alt=""
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="mt-8 max-w-[500px] space-y-5 md:mt-0">
              <h6 className="font-bold text-neutral-500">
                {page.ekyc_detail.benefit.item2.title}
              </h6>
              <p className="text-justify">
                {page.ekyc_detail.benefit.item2.subtitle}
              </p>
              <ul className="ml-10 list-disc">
                <li className="text-neutral-500">
                  {page.ekyc_detail.benefit.item2.benefit1}
                </li>
                <li className="text-neutral-500">
                  {page.ekyc_detail.benefit.item2.benefit2}
                </li>
                <li className="text-neutral-500">
                  {page.ekyc_detail.benefit.item2.benefit3}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default EkycDetail;
