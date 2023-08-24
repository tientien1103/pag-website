"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function Technology() {
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
        Công nghệ & Tính năng
      </h2>
      <div className="mt-16 space-y-28">
        <div
          className="flex flex-col-reverse md:flex-row-reverse md:gap-24 lg:gap-36 font-medium"
          data-aos="fade-right"
          data-aos-duration={400}
        >
          <div className="flex flex-col justify-center  max-w-[520px]">
            <h3 className="my-4 text-xl md:text-3xl text-center md:text-start font-bold text-primary">
              Deep Learning
            </h3>
            <p className="text-base text-secondary">
              Bằng cách huấn luyện mô hình trên tập dữ liệu lớn, thuật toán
              Học sâu có thể tự động mã hoá và ghi nhớ những thông tin đặc
              trưng, đồng thời tự cải thiện kết quả, điều mà các thuật toán
              thông thường không thể làm được.
            </p>
          </div>
            <Image
              src="/img/home/technology/deep-learning.png"
              alt=""
              width={300}
              height={185}
              className="md:ml-36 self-center object-cover"
            />
        </div>
        <div
          className="flex flex-col-reverse md:flex-row md:gap-24 lg:gap-36 font-medium"
          data-aos="fade-left"
          data-aos-duration={400}
        >
          <div className="flex flex-col justify-center md:text-right max-w-[520px]">
            <h3 className="my-4 text-xl md:text-3xl text-center md:text-right font-bold text-primary">
              Big Data
            </h3>
            <p className="text-base text-secondary">
              Hệ thống dữ liệu lớn (Big Data) lưu trữ hàng chục tỷ bản ghi
              dữ liệu, được ứng dụng rộng rãi trong việc phân tích kinh
              doanh, giúp đưa ra các thống kê và dự đoán về xu hướng trong
              tương lai.
            </p>
          </div>
            <Image
              src="/img/home/technology/big-data.png"
              alt=""
              width={300}
              height={202}
              className="md:mr-36 self-center object-cover"
            />
        </div>
      </div>
    </div>   
  )
}

export default Technology