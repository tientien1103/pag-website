"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../common/Button";
import Link from "next/link";
import { Locale } from "../../../i18n.config";

function Banner({ page, lang }: { page: any; lang: Locale }) {
  useEffect(() => {
    AOS.init({
      delay: 500,
      duration: 800,
      once: true,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-between">
      <div
        className="mx-5 mt-10 flex flex-col justify-center gap-4 md:mx-24 md:mt-28 lg:mx-0"
        data-aos="fade-down-right"
      >
        <h2 className="max-w-[510px] text-center text-4xl font-extrabold text-primary md:text-start md:text-6xl">
          {page.home.title}
        </h2>
        <p className="w-full text-justify text-lg font-bold leading-6 text-secondary lg:max-w-[600px]">
          {page.home.description}
        </p>
        <Link href={`/${lang}/services`}>
          <Button className="mt-10 w-44">{page.common.button} &#8594;</Button>
        </Link>
      </div>
      <div className="relative h-[200px] w-full self-center md:h-[400px] lg:w-[600px]">
        <Image
          src="/img/home/main-banner.png"
          alt=""
          fill
          className="object-contain"
          data-aos="fade-down-left"
        />
      </div>
    </div>
  );
}

export default Banner;
