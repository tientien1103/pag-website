"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface DetailBannerProps {
  title: string;
  subTitle: string;
  description: string;
  image: string;
}

function DetailBanner({
  title,
  subTitle,
  description,
  image,
}: DetailBannerProps) {
  useEffect(() => {
    AOS.init({
      delay: 500,
      duration: 600,
      once: true,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="flex flex-col-reverse items-center justify-between overflow-hidden rounded-[50px] border border-neutral-400 shadow-3xl md:flex-row md:pl-12 md:pr-5">
      <div className="max-w-[480px] space-y-5 py-4 pb-12 pt-4 text-center md:py-28">
        <h1
          className="text-center text-5xl font-bold text-primary md:text-6xl"
          data-aos="fade-down"
          data-aos-duration={700}
        >
          {title}
        </h1>
        <p
          className="mdtext-3xl text-2xl font-bold text-primary"
          data-aos="fade-up"
        >
          {subTitle}
        </p>
        <p className="mx-7 text-start text-sm font-bold tracking-wider text-neutral-500 md:mx-0 md:text-base md:tracking-normal">
          {description}
        </p>
      </div>
      <div
        className="relative mt-4 h-[280px] w-full md:mt-0 md:w-[350px] lg:h-[409px] lg:w-[531px]"
        data-aos="fade-left"
      >
        <Image
          src={image}
          alt=""
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}

export default DetailBanner;
