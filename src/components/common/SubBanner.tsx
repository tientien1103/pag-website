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
    <div className="space-y-4 pt-4 text-center md:pt-10">
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
        className="hidden text-lg font-bold uppercase text-secondary md:block"
        data-aos="fade-up"
      >
        {product}
      </p>
    </div>
  );
}

export default SubBanner;
