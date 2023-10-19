"use client";
import Image from "next/image";
import React, { Fragment, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ProductList() {
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
        className="text-2xl font-bold text-primary md:text-4xl"
        data-aos="zoom-in"
      >
        Sản phẩm
        <br /> của chúng tôi
      </h2>
      <div className="grid grid-cols-1 grid-rows-1 gap-20 text-center font-medium sm:grid-cols-2 sm:grid-rows-[minmax(0,_auto)] md:mx-20 md:text-start lg:mx-0">
        <div
          className="flex max-w-[370px] flex-col gap-4"
          data-aos="fade-right"
        >
          <Image
            src="/img/home/product/ekyc.png"
            alt=""
            width={100}
            height={100}
            className="self-center object-cover md:self-start"
          />
          <h3 className="text-2xl text-primary">eKYC</h3>
          <p className="text-base text-secondary">
            Định danh khách hàng nhanh chóng với công nghệ trí tuệ nhân tạo,
            giảm thiểu rủi ro, tiết kiệm chi phí vận hành và tiếp cận khách hàng
            mới cho doanh nghiệp
          </p>
        </div>
        <div className="flex max-w-[360px] flex-col gap-4" data-aos="fade-up">
          <Image
            src="/img/home/product/api-hub.png"
            alt=""
            width={100}
            height={100}
            className="self-center object-cover md:self-start"
          />
          <h3 className="text-2xl text-primary">API Hub</h3>
          <p className="text-base text-secondary">
            API Hub đầu tiên tại Việt Nam – Nơi các cá nhân và doanh nghiệp tìm
            kiếm, trải nghiệm, kết nối với hàng trăm API thuộc nhiều lĩnh vực
            khác nhau
          </p>
        </div>
        <div className="flex max-w-[340px] flex-col gap-4" data-aos="fade-left">
          <Image
            src="/img/home/product/scoring.png"
            alt=""
            width={100}
            height={100}
            className="self-center object-cover md:self-start"
          />
          <h3 className="text-2xl text-primary">Scoring</h3>
          <p className="text-base text-secondary">
            Phân loại khách hàng thông qua các mô hình chấm điểm giúp giảm tới
            40% tỷ lệ nợ xấu.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
