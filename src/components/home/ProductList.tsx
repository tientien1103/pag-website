"use client";
import Image from "next/image";
import React, { Fragment, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ProductList({ page }: any) {
  useEffect(() => {
    AOS.init({
      delay: 500,
      duration: 800,
      once: true,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="flex flex-col justify-between gap-12 md:flex-row">
      <h2
        className="text-center text-2xl font-bold text-primary md:text-start md:text-4xl"
        data-aos="zoom-in"
      >
        {page.home.services.title}
      </h2>
      <div className="grid grid-cols-1 grid-rows-1 gap-20 text-center font-medium sm:grid-cols-2 sm:grid-rows-[minmax(0,_auto)] md:mx-20 md:text-start lg:mx-0">
        <div
          className="flex max-w-[370px] flex-col gap-4"
          data-aos="fade-right"
        >
          <h3 className="text-3xl font-semibold text-primary">
            {page.home.services.item1.name}
          </h3>
          <p className="text-justify text-base text-secondary">
            {page.home.services.item1.description}
          </p>
        </div>
        <div className="flex max-w-[360px] flex-col gap-4" data-aos="fade-up">
          <h3 className="text-3xl font-semibold text-primary">
            {page.home.services.item2.name}
          </h3>
          <p className="text-justify text-base text-secondary">
            {page.home.services.item2.description}
          </p>
        </div>
        <div className="flex max-w-[340px] flex-col gap-4" data-aos="fade-left">
          <h3 className="text-3xl font-semibold text-primary">
            {page.home.services.item3.name}
          </h3>
          <p className="text-justify text-base text-secondary">
            {page.home.services.item3.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
