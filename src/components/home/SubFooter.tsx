"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function SubFooter() {
  useEffect(() => {
    AOS.init({
      delay: 500,
      duration: 400,
      once: true,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="flex flex-row justify-center lg:gap-16">
      <div className="relative w-[1200px] h-[600px] hidden lg:block">
        <Image
          src="/img/home/sub-footer.png"
          alt=""
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          data-aos="zoom-in"
        />
      </div>
            
      <div
        className="md:py-40 lg:pt-72 py-14 flex w-full mx-2 md:mx-16 lg:mx-0 flex-col gap-7 text-white"
        data-aos="fade-left"
      >
        <h2 className="text-3xl text-center md:text-start md:text-4xl font-semibold">Sứ mệnh của PAG</h2>
          <p className="text-lg md:text-xl leading-9 font-medium lg:max-w-[580px]">
            PAG PHÁT TRIỂN CÔNG NGHỆ HỌC MÁY VÀ QUẢN TRỊ CƠ SỞ DỮ LIỆU LỚN
            HỖ TRỢ NGÀNH TÀI CHÍNH HOẠT ĐỘNG MINH BẠCH, HIỆU QUẢ.
          </p>
      </div>
    </div>
  )
}

export default SubFooter