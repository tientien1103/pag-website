"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface SubBannerProps {
  type: string;
  product?: string;
}

function SubBanner({ type, product }: SubBannerProps) {
  useEffect(() => {
    AOS.init({
      delay: 500,
      duration: 600,
      once: true,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="flex flex-col-reverse items-center justify-between overflow-hidden rounded-[50px] border border-neutral-400 shadow-3xl md:flex-row md:pl-28 md:pr-5">
      <div className="space-y-5 pb-12 pt-4 text-center md:py-28 lg:py-40">
        <h1
          className="text-center text-5xl font-bold uppercase text-primary md:text-6xl"
          data-aos="fade-down"
          data-aos-duration={700}
        >
          {type}
        </h1>
        <p
          className="text-sm font-bold text-primary md:text-base"
          data-aos="fade-up"
        >
          PAG - Công ty công nghệ Dữ liệu lớn và Học máy
        </p>
        <p
          className="hidden text-lg font-bold uppercase text-blueText md:block"
          data-aos="fade-up"
        >
          {product}
        </p>
      </div>
      <div
        className="relative h-[280px] w-full md:w-[350px] lg:h-[409px] lg:w-[531px]"
        data-aos="fade-left"
      >
        <Image
          src="/img/sub-banner.png"
          alt=""
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}

export default SubBanner;
