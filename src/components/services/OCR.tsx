"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../common/Button";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "../../../i18n.config";

function OCR({ page, lang }: { page: any; lang: Locale }) {
  useEffect(() => {
    AOS.init({
      delay: 500,
      duration: 500,
      once: true,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="mx-6 flex flex-col-reverse gap-4 md:mx-0 md:gap-0 lg:flex-row lg:gap-52">
      <div className="mb-16 flex w-full flex-col gap-5 md:my-12 md:max-w-[650px] lg:max-w-[490px]">
        <h3 className="text-2xl font-bold text-primary" data-aos="fade-right">
          {page.services.item3.name}
        </h3>

        <div data-aos="fade-left" className="space-y-5">
          <p className="font-medium text-neutral-500">
            {page.services.item3.description}
          </p>
          <p className="font-medium text-neutral-500">
            {page.services.item3.description2}
          </p>
        </div>
        <div data-aos="fade-right">
          <Link href={`/${lang}/ocr-detail`}>
            <Button className="mt-5 self-center md:self-start">
              {page.common.button} &#8594;
            </Button>
          </Link>
        </div>
      </div>

      <div
        className="relative h-[400px] w-full self-center md:my-20 md:w-[400px] lg:my-0 lg:ml-0"
        data-aos="fade-right"
      >
        <Image
          src="/img/services/scoring.webp"
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}

export default OCR;
