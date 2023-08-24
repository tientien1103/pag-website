"use client"
import Image from 'next/image'
import Link from 'next/link'
import React,{ useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function Media() {
  useEffect(() => {
    AOS.init({
      delay: 500,
      duration: 800,
      once: true,
      disable: "mobile",
    });
  }, []);
  return (
    <div>
      <h2
        className="text-center text-2xl md:text-40 font-bold text-primary"
        data-aos="zoom-in"
      >
        Truyền thông về chúng tôi?
      </h2>
      <div className="my-20 flex flex-col items-center lg:justify-between font-medium lg:flex-row">
          <Link href="#">
            <div
              className="flex cursor-pointer flex-col gap-4 h-[320px]"
              data-aos="fade-right"
              data-aos-duration={400}
            >
              <div className="relative h-[225px] w-[300px] bg-slate-500">
                <Image
                  src={`https://picsum.photos/seed/${Math.random()}/517.webp`}
                  fill
                  alt=""
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <p className="max-w-[300px] text-center text-base font-bold text-primary">
                Cuộc thi “Tìm kiếm giải pháp chấm điểm tín dụng” đã tìm ra nhà
                vô địch
              </p>
            </div>
          </Link>

          <Link href="#">
            <div
              className="flex cursor-pointer flex-col gap-4 h-[320px]"
              data-aos="fade-up"
              data-aos-duration={400}
            >
              <div className="relative h-[225px] w-[300px] bg-slate-500">
                <Image
                  src={`https://picsum.photos/seed/${Math.random()}/517.webp`}
                  fill
                  alt=""
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <p className="max-w-[300px] text-center text-base font-bold text-primary">
                Phó TGĐ PAG: Sắp tới, công nghệ eKYC sẽ kết hợp giữa khuôn mặt
                và giọng nói
              </p>
            </div>
          </Link>

          <Link href="#">
            <div
              className="flex cursor-pointer flex-col gap-4 h-[320px]"
              data-aos="fade-left"
              data-aos-duration={400}
            >
              <div className="relative h-[225px] w-[300px] bg-slate-500">
                <Image
                  src={`https://picsum.photos/seed/${Math.random()}/517.webp`}
                  fill
                  alt=""
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <p className="max-w-[300px] text-center text-base font-bold text-primary">
                Dùng AI xây dựng giải pháp chấm điểm tín dụng Make in Vietnam
                “may đo” cho doanh nghiệp Việt
              </p>
            </div>
          </Link>
      </div>
    </div>     
  )
}

export default Media