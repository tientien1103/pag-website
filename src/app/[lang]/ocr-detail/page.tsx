import Container from "@/components/common/Container";
import Image from "next/image";
import React from "react";
import { Locale } from "../../../../i18n.config";
import { getDictionary } from "@/libs/dictionary";

async function OcrDetail({ params: { lang } }: { params: { lang: Locale } }) {
  const { page } = await getDictionary(lang);
  return (
    <main className="min-h-screen overflow-hidden">
      <section className="mt-12">
        <div className="container max-w-6xl">
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-center text-5xl font-bold text-primary md:text-6xl">
              {page.ocr_detail.title}
            </h1>
            <p className="mdtext-3xl text-2xl font-bold text-primary">
              {page.ocr_detail.subtitle}
            </p>
            <p className="mx-7 w-full text-center text-sm font-bold tracking-wider text-secondary md:mx-0 md:max-w-[500px] md:text-base md:tracking-normal">
              {page.ocr_detail.description}
            </p>
          </div>
        </div>
      </section>

      <section className="pt-24">
        <Container className="flex flex-col-reverse justify-around lg:flex-row-reverse">
          <div className="mt-4 w-full space-y-5 px-5 md:mt-0 md:px-8 lg:max-w-[500px] lg:px-0">
            <h3 className="text-center text-xl font-bold text-primary md:text-start md:text-4xl">
              {page.ocr_detail.definition.title}
            </h3>
            <p className="text-neutral-500">
              {page.ocr_detail.definition.description}
            </p>
            <p className="text-neutral-500">
              {page.ocr_detail.definition.description2}
            </p>
          </div>

          <div className="relative h-[263px] w-full self-center md:w-[532px]">
            <Image
              src="/img/ocr-detail/ocr1.webp"
              alt=""
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </Container>
      </section>

      <section className="pt-24">
        <div className="container mx-auto max-w-5xl space-y-20">
          <div className="mx-5 mt-4 space-y-5 md:mt-0">
            <h3 className="text-center text-xl font-bold text-primary md:text-4xl">
              {page.ocr_detail.why.question}
            </h3>
            <p className="text-neutral-500">{page.ocr_detail.why.because1}</p>
            <p className="text-neutral-500">{page.ocr_detail.why.because2}</p>
            <p className="text-neutral-500">{page.ocr_detail.why.because3}</p>
          </div>

          <div className="mx-5 mt-4 space-y-5 md:mt-0">
            <h3 className="text-center text-xl font-bold text-primary md:text-4xl">
              {page.ocr_detail.combine.title}
            </h3>
            <p className="text-neutral-500">{page.ocr_detail.combine.detail}</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container max-w-6xl">
          <h3 className="text-center text-xl font-bold text-primary md:text-3xl">
            {page.ocr_detail.benefit.title}
          </h3>
          <div className="mt-8 flex flex-col justify-around md:flex-row-reverse">
            <div className="relative h-[182px] w-[300px] self-center">
              <Image
                src="/img/ocr-detail/ocr2.webp"
                alt=""
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="mt-5 w-full space-y-5 md:mt-0 md:max-w-[500px] lg:max-w-[700px]">
              <h6 className="font-bold text-neutral-500">
                {page.ocr_detail.benefit.item1.title}
              </h6>
              <ul className="ml-8 list-disc">
                <li className="text-neutral-500">
                  {page.ocr_detail.benefit.item1.benefit1}
                </li>
                <li className="text-neutral-500">
                  {page.ocr_detail.benefit.item1.benefit2}
                </li>
                <li className="text-neutral-500">
                  {page.ocr_detail.benefit.item1.benefit3}
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 flex flex-col justify-around md:flex-row">
            <div className="relative h-[215px] w-[394px] md:h-[350px] md:w-[550px] lg:h-[300px]">
              <Image
                src="/img/ocr-detail/ocr3.webp"
                alt=""
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="mt-5 max-w-[420px] space-y-5 md:mt-0 lg:mt-14">
              <h6 className="font-bold text-neutral-500">
                {page.ocr_detail.benefit.item2.title}
              </h6>
              <ul className="ml-8 list-disc">
                <li className="text-neutral-500">
                  {page.ocr_detail.benefit.item2.benefit1}
                </li>
                <li className="text-neutral-500">
                  {page.ocr_detail.benefit.item2.benefit2}
                </li>
                <li className="text-neutral-500">
                  {page.ocr_detail.benefit.item2.benefit3}
                </li>
                <li className="text-neutral-500">
                  {page.ocr_detail.benefit.item2.benefit4}
                </li>
                <li className="text-neutral-500">
                  {page.ocr_detail.benefit.item2.benefit5}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default OcrDetail;
