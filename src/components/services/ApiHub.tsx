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
    <div className="flex flex-col lg:flex-row lg:gap-52">
      <div
        className="relative my-12 h-[300px] w-full self-center md:my-20 md:w-[297px] lg:ml-24"
        data-aos="fade-right"
      >
        <Image
          src="/img/services/api-hub.webp"
          alt=""
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="mx-6 mb-16 space-y-5 md:mx-0 md:ml-16 md:max-w-[640px] lg:max-w-[450px]">
          <Link href="https://apix.vn/hub" target="_blank">
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
            <Link href="https://apix.vn/hub" target="_blank">
              <Button className="mt-5 self-center md:self-start">
                Tìm hiểu thêm
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApiHub;
