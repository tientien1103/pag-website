"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
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
    <div>
      <h2
        className="text-center text-2xl md:text-40 font-bold text-primary"
        data-aos="zoom-in"
      >
        Sản phẩm của chúng tôi
      </h2>
      <div className="md:flex-row md:flex-wrap md:justify-between md:mx-20 lg:mx-0 flex my-20 md:text-start text-center flex-col gap-20 font-medium">            
        <div className="flex flex-col gap-4 col-span-2 max-w-[370px]" data-aos="fade-right">
          <Image
            src="/img/home/product/ekyc.png"
            alt=""
            width={100}
            height={100}
            className="object-cover md:self-start self-center"
          />
          <h3 className="text-2xl text-primary">eKYC</h3>
          <p className="text-base text-secondary">
            Định danh khách hàng nhanh chóng với công nghệ trí tuệ nhân tạo,
            giảm thiểu rủi ro, tiết kiệm chi phí vận hành và tiếp cận khách
            hàng mới cho doanh nghiệp
          </p>
        </div>
        <div className="flex flex-col gap-4 col-span-2 max-w-[360px]" data-aos="fade-up">
          <Image
            src="/img/home/product/api-hub.png"
            alt=""
            width={100}
            height={100}
            className="object-cover md:self-start self-center"
          />
          <h3 className="text-2xl text-primary">API Hub</h3>
          <p className="text-base text-secondary">
            API Hub đầu tiên tại Việt Nam – Nơi các cá nhân và doanh nghiệp
            tìm kiếm, trải nghiệm, kết nối với hàng trăm API thuộc nhiều
            lĩnh vực khác nhau
          </p>
        </div>
        <div className="flex flex-col gap-4 col-span-2 max-w-[340px]" data-aos="fade-left">
          <Image
            src="/img/home/product/scoring.png"
            alt=""
            width={100}
            height={100}
            className="object-cover md:self-start self-center"
          />
          <h3 className="text-2xl text-primary">Scoring</h3>
          <p className="text-base text-secondary">
            Phân loại khách hàng thông qua các mô hình chấm điểm giúp giảm
            tới 40% tỷ lệ nợ xấu.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductList