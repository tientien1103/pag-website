"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutUs({ page }: any) {
  useEffect(() => {
    AOS.init({
      delay: 500,
      duration: 800,
      once: true,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <h2
        className="text-center text-2xl font-bold text-primary md:text-40"
        data-aos="zoom-in"
      >
        {page.home.about_us.title}
      </h2>
      <div className="mt-20 flex flex-col items-center font-medium md:mt-36 md:h-[300px] md:flex-row md:gap-10">
        <div className="group" data-aos="fade-right" data-aos-duration={400}>
          <div className="flex flex-col gap-8 rounded-xl px-2 py-8 md:h-[450px] md:py-24 group-hover:md:bg-primary">
            <Image
              src="/svg/home/us/us1.svg"
              alt=""
              width={56}
              height={56}
              className="block self-center object-cover group-hover:md:hidden"
            />
            <Image
              src="/svg/home/us/us1-white.svg"
              alt=""
              width={86}
              height={86}
              className="hidden self-center object-cover group-hover:md:block"
            />
            <div className="flex flex-col">
              <h3 className="text-center text-xl font-bold text-primary group-hover:md:text-white">
                {page.home.about_us.item1.name}
              </h3>
              <hr className="my-4 h-[1px] w-[54px] self-center border-gray-200 group-hover:border-white" />
              <p className="hidden max-w-[350px] text-center text-base text-gray-200 md:block group-hover:md:text-white">
                {page.home.about_us.item1.description}
              </p>
            </div>
          </div>
        </div>

        <div className="group" data-aos="fade-up" data-aos-duration={400}>
          <div className="flex flex-col gap-8 rounded-xl px-2 py-8 md:h-[450px] md:py-24 group-hover:md:bg-primary">
            <Image
              src="/svg/home/us/us2.svg"
              alt=""
              width={56}
              height={56}
              className="block self-center object-cover group-hover:md:hidden"
            />
            <Image
              src="/svg/home/us/us2-white.svg"
              alt=""
              width={86}
              height={86}
              className="hidden self-center object-cover group-hover:md:block"
            />
            <div className="flex flex-col">
              <h3 className="text-center text-xl font-bold text-primary group-hover:md:text-white">
                {page.home.about_us.item2.name}
              </h3>
              <hr className="my-4 h-[1px] w-[54px] self-center border-gray-200 group-hover:border-white" />
              <p className="hidden max-w-[350px] text-center text-base text-gray-200 md:block group-hover:md:text-white">
                {page.home.about_us.item2.description}
              </p>
            </div>
          </div>
        </div>

        <div
          className="group flex flex-col gap-4"
          data-aos="fade-left"
          data-aos-duration={400}
        >
          <div className="flex flex-col gap-8 rounded-xl px-2 py-8 md:h-[450px] md:py-24 group-hover:md:bg-primary">
            <Image
              src="/svg/home/us/us3.svg"
              alt=""
              width={56}
              height={56}
              className="block self-center object-cover group-hover:md:hidden"
            />
            <Image
              src="/svg/home/us/us3-white.svg"
              alt=""
              width={86}
              height={86}
              className="hidden self-center object-cover group-hover:md:block"
            />
            <div className="flex flex-col">
              <h3 className="text-center text-xl font-bold text-primary group-hover:md:text-white">
                {page.home.about_us.item3.name}
              </h3>
              <hr className="my-4 h-[1px] w-[54px] self-center border-gray-200 group-hover:border-white" />
              <p className="hidden max-w-[350px] text-center text-base text-gray-200 md:block group-hover:md:text-white">
                {page.home.about_us.item3.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
