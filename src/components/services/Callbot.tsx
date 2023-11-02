"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../common/Button";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "../../../i18n.config";

function Callbot({ page, lang }: { page: any; lang: Locale }) {
  useEffect(() => {
    AOS.init({
      delay: 500,
      duration: 500,
      once: true,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="flex flex-col lg:flex-row lg:gap-52">
      <div
        className="relative my-12 h-[300px] w-full self-center md:my-20 md:w-[297px] lg:ml-24"
        data-aos="fade-right"
      >
        <Image
          src="/img/services/callbot.webp"
          alt=""
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="mx-6 mb-16 space-y-5 md:mx-0 md:ml-16 md:max-w-[640px] lg:max-w-[450px]">
          <h3 className="text-2xl font-bold text-primary" data-aos="fade-right">
            {page.services.item2.name}
          </h3>

          <p
            className="text-justify font-medium text-neutral-500"
            data-aos="fade-left"
          >
            {page.services.item2.description}
          </p>
          <div data-aos="fade-right">
            <Link href={`/${lang}/callbot-detail`}>
              <Button className="mt-5 self-center md:self-start">
                {page.common.button} &#8594;
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Callbot;
