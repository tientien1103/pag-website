"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../common/Button";
import Image from "next/image";
import Circle from "../common/Circle";
import Link from "next/link";

function ApiHub() {
  useEffect(() => {
    AOS.init({
      delay: 500,
      duration: 500,
      once: true,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="relative ml-10 rounded-e-[60px] rounded-br-[60px] border-dashed border-neutral-400 md:ml-0 md:border-l-2 lg:ml-14 lg:border-b-2 lg:border-l-0 lg:border-r-2">
        <div data-aos="fade-left">
          <Circle className="absolute left-3 top-[480px] hidden md:block lg:left-[98%] lg:top-24" />
        </div>
        <div
          className="relative my-12 mr-40 h-[300px] w-[297px] self-center md:my-20 md:ml-44 lg:ml-24"
          data-aos="fade-right"
        >
          <Image
            src="/img/services/api-hub.png"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center border-dashed md:border-l-2 md:border-neutral-400 lg:border-none">
        <div className="mx-6 mb-16 space-y-5 md:mx-0 md:ml-16 md:max-w-[640px] lg:max-w-[450px]">
          <p className="text-7xl font-bold text-primary" data-aos="fade-left">
            02
          </p>
          <Link href="/services/api-hub">
            <h3
              className="text-2xl font-bold text-primary"
              data-aos="fade-right"
            >
              APIX - API Hub đầu tiên tại Việt Nam
            </h3>
          </Link>
          <p className="font-medium text-neutral-500" data-aos="fade-left">
            Nơi các cá nhân và doanh nghiệp tìm kiếm, trải nghiệm, kết nối với
            hàng trăm API thuộc nhiều lĩnh vực khác nhau
          </p>
          <div data-aos="fade-right">
            <Button className="mt-5 self-center md:self-start">
              Tìm hiểu thêm
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApiHub;
