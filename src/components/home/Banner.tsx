"use client";
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

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
            className="flex mx-5 md:mx-24 lg:mx-0 mt-10 md:mt-28 flex-col justify-center gap-4"
            data-aos="fade-down-right"
          >
            <h2 className="md:text-6xl text-4xl text-center md:text-start font-extrabold text-primary">
              Trust & Thriving
            </h2>
            <p className="text-lg leading-6 font-bold w-full lg:max-w-[600px] text-secondary">
              Chúng tôi là công ty cung cấp giải pháp công nghệ tài chính có
              nhiều kinh nghiệm tại Việt Nam, hoạt động mạnh mẽ trong
              lĩnh vực quản trị dữ liệu lớn và phát triển học máy, phụng
              sự các tổ chức tài chính với cam kết cao nhất.
            </p>
          </div>
          <div className="relative w-full lg:w-[580px] h-[200px] md:h-[400px]">
            <Image
              src="/img/home/banner.png"
              alt=""
              fill
              className="object-contain"
              data-aos="fade-down-left"
            />
          </div>
          </div>
  )
}

export default Banner