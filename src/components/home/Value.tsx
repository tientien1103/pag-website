"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function Value() {
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
              className="text-center text-2xl md:text-40 te font-bold text-primary"
              data-aos="zoom-in"
            >
              Giá trị của chúng tôi
            </h2>
            <div className="flex flex-col-reverse md:flex-row mx-4 md:mx-10 lg:mx-0 gap-4 lg:gap-0 justify-between">
              <ul
                className="flex flex-col justify-center gap-3 text-base md:text-2xl font-bold text-neutral-500"
                data-aos="fade-down-right"
              >
                <li className="flex flex-row">
                  <Image src="/svg/stick.svg" alt="" width={40} height={35} />
                  <p className="pl-4 self-center">Đi đầu trong Chống gian lận / giả mạo</p>
                </li>
                <li className="flex flex-row">
                  <Image src="/svg/stick.svg" alt="" width={40} height={35} />
                  <p className="pl-4 self-center">Minh bạch trong xác thực thông tin</p>
                </li>
                <li className="flex flex-row">
                  <Image src="/svg/stick.svg" alt="" width={40} height={35} />
                  <p className="pl-4 self-center">
                    Rút ngắn thời gian thẩm định khoản vay dưới 30 phút
                  </p>
                </li>
                <li className="flex flex-row">
                  <Image src="/svg/stick.svg" alt="" width={40} height={35} />
                  <p className="pl-4 self-center">Giảm tỷ lệ nợ xấu</p>
                </li>
                <li className="flex flex-row">
                  <Image src="/svg/stick.svg" alt="" width={40} height={35} />
                  <p className="pl-4 self-center">Tiết kiệm chi phí vận hành</p>
                </li>
              </ul>
              <div className="relative h-[362px] w-[360px]">
              <Image
                src="/img/home/value.png"
                alt=""
                fill
                className="object-contain"
                data-aos="fade-down-left"
              />
              </div>
            </div>
          </div>
  )
}

export default Value