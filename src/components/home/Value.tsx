"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Value({ page }: any) {
  useEffect(() => {
    AOS.init({
      delay: 500,
      duration: 800,
      once: true,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="flex flex-col gap-10">
      <h2
        className="text-center text-2xl font-bold text-primary md:text-40"
        data-aos="zoom-in"
      >
        {page.home.value.title}
      </h2>

      <ul
        className="space-y-4 text-base font-bold text-secondary md:space-y-10 md:py-10 md:text-2xl"
        data-aos="fade-down-right"
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-4">
          <li className="flex w-full flex-col items-center gap-4 md:max-w-[350px]">
            <Image
              src="/svg/home/value/value1.svg"
              alt=""
              width={40}
              height={35}
            />
            <hr className="h-[1px] w-[70px] border-secondary" />
            <p className="pl-4 text-center">{page.home.value.value1}</p>
          </li>
          <li className="flex w-full flex-col items-center gap-4 md:max-w-[350px]">
            <Image
              src="/svg/home/value/value2.svg"
              alt=""
              width={40}
              height={35}
            />
            <hr className="h-[1px] w-[70px] border-secondary" />
            <p className="pl-4 text-center">{page.home.value.value2}</p>
          </li>
          <li className="flex w-full flex-col items-center gap-4 md:max-w-[350px]">
            <Image
              src="/svg/home/value/value3.svg"
              alt=""
              width={40}
              height={35}
            />
            <hr className="h-[1px] w-[70px] border-secondary" />
            <p className="pl-4 text-center">{page.home.value.value3}</p>
          </li>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <li className="flex w-full flex-col items-center gap-4 md:ml-48 md:max-w-[350px]">
            <Image
              src="/svg/home/value/value4.svg"
              alt=""
              width={40}
              height={35}
            />
            <hr className="h-[1px] w-[70px] border-secondary" />
            <p className="pl-4 text-center">{page.home.value.value4}</p>
          </li>
          <li className="flex w-full flex-col items-center gap-4 md:max-w-[350px]">
            <Image
              src="/svg/home/value/value5.svg"
              alt=""
              width={40}
              height={35}
            />
            <hr className="h-[1px] w-[70px] border-secondary" />
            <p className="pl-4 text-center">{page.home.value.value5}</p>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Value;
