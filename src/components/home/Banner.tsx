"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../common/Button";

function Banner() {
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
        <h2 className="text-center text-4xl font-extrabold text-primary md:text-start md:text-6xl">
          Trust & Thriving
        </h2>
        <p className="w-full text-lg font-bold leading-6 text-secondary lg:max-w-[600px]">
          Chúng tôi là công ty cung cấp giải pháp công nghệ tài chính có nhiều
          kinh nghiệm tại Việt Nam, hoạt động mạnh mẽ trong lĩnh vực quản trị dữ
          liệu lớn và phát triển học máy, phụng sự các tổ chức tài chính với cam
          kết cao nhất.
        </p>
        <Button className="mt-10 w-44">Tìm hiểu thêm &#8594;</Button>
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
