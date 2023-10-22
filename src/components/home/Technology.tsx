"use client";
import Image from "next/image";
import React, { useEffect } from "react";
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
        className="text-center text-2xl font-bold text-primary md:text-40"
        data-aos="zoom-in"
      >
        Công nghệ & Tính năng
      </h2>
      <div className="mt-16 space-y-28">
        <div
          className="flex flex-col-reverse font-medium md:flex-row-reverse md:gap-24 lg:gap-36"
          data-aos="fade-right"
          data-aos-duration={400}
        >
          <div className="flex max-w-[520px] flex-col  justify-center">
            <h3 className="my-4 text-center text-xl font-bold text-primary md:text-start md:text-3xl">
              Deep Learning
            </h3>
            <p className="text-center text-base text-secondary md:text-start">
              Bằng cách huấn luyện mô hình trên tập dữ liệu lớn, thuật toán Học
              sâu có thể tự động mã hoá và ghi nhớ những thông tin đặc trưng,
              đồng thời tự cải thiện kết quả, điều mà các thuật toán thông
              thường không thể làm được.
            </p>
          </div>
          <Image
            src="/img/home/technology/tech1.png"
            alt=""
            width={300}
            height={185}
            className="self-center object-cover md:ml-36"
          />
        </div>
        <div
          className="flex flex-col-reverse font-medium md:flex-row md:gap-24 lg:gap-36"
          data-aos="fade-left"
          data-aos-duration={400}
        >
          <div className="flex max-w-[520px] flex-col justify-center md:text-right">
            <h3 className="my-4 text-center text-xl font-bold text-primary md:text-right md:text-3xl">
              Big Data
            </h3>
            <p className="text-center text-base text-secondary md:text-right">
              Hệ thống dữ liệu lớn (Big Data) lưu trữ hàng chục tỷ bản ghi dữ
              liệu, được ứng dụng rộng rãi trong việc phân tích kinh doanh, giúp
              đưa ra các thống kê và dự đoán về xu hướng trong tương lai.
            </p>
          </div>
          <Image
            src="/img/home/technology/tech2.png"
            alt=""
            width={300}
            height={202}
            className="self-center object-cover md:mr-36"
          />
        </div>
      </div>
    </div>
  );
}

export default Technology;
