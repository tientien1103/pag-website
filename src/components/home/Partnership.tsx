"use client";
import { partnerArr, partnerArr2 } from "@/mockup/partners";
import Aos from "aos";
import Image from "next/image";
import React, { useEffect } from "react";

function Partnership() {
  useEffect(() => {
    Aos.init({
      delay: 500,
      duration: 800,
      once: true,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="flex flex-col justify-center">
      <h2
        data-aos="zoom-in"
        className="text-center text-[40px] font-bold text-primary"
      >
        Đối tác của PAG
      </h2>
      <div data-aos="fade-up-right" className="relative my-10">
        <p className="flex h-full w-full whitespace-nowrap font-bold uppercase text-neutral-500 before:mr-10 before:block before:w-full before:translate-y-3 before:border-t-[0.5px] before:border-neutral-300 after:ml-10 after:block after:w-full after:translate-y-3 after:border-t-[0.5px] after:border-neutral-300">
          Cộng sự
        </p>
      </div>
      <div
        data-aos="fade-up-right"
        className="mx-auto grid grid-cols-2 gap-x-8 gap-y-5 md:grid-cols-7"
      >
        {partnerArr.map((partner) => (
          <div key={partner.image} className="relative h-14 w-32">
            <Image
              src={`/img/home/partner/${partner.image}.png`}
              fill
              alt=""
              className="object-contain"
            />
          </div>
        ))}
      </div>
      <div data-aos="fade-up-left" className="relative my-14">
        <p className="flex h-full w-full whitespace-nowrap font-bold uppercase text-neutral-500 before:mr-10 before:block before:w-full before:translate-y-3 before:border-t-[0.5px] before:border-neutral-300 after:ml-10 after:block after:w-full after:translate-y-3 after:border-t-[0.5px] after:border-neutral-300">
          Khách hàng
        </p>
      </div>
      <div
        data-aos="fade-up-left"
        className="mx-auto grid grid-cols-2 gap-x-8 gap-y-5 md:grid-cols-7"
      >
        {partnerArr2.slice(0, 7).map((partner) => (
          <div key={partner.image} className="relative h-14 w-32">
            <Image
              src={`/img/home/partner/${partner.image}.png`}
              fill
              alt=""
              className="object-contain"
            />
          </div>
        ))}
      </div>
      <div
        data-aos="fade-up-left"
        className="mx-auto mt-12 grid grid-cols-2 gap-x-8 gap-y-5 md:grid-cols-6"
      >
        {partnerArr2.slice(7, 13).map((partner) => (
          <div key={partner.image} className="relative h-14 w-32">
            <Image
              src={`/img/home/partner/${partner.image}.png`}
              fill
              alt=""
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partnership;
