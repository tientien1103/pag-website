"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../common/Button";
import Image from "next/image";
import Circle from "../common/Circle";
import Link from "next/link";

function Ekyc() {
  useEffect(() => {
    AOS.init({
      delay: 500,
      duration: 500,
      once: true,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="mx-6 flex flex-col-reverse gap-4 md:mx-0 md:gap-0 lg:flex-row lg:gap-52">
      <div className="relative border-dashed border-neutral-400 md:border-l-2 lg:rounded-bl-[60px] lg:border-b-2">
        <div data-aos="fade-left">
          <Circle className="absolute top-6 hidden md:left-3 md:block lg:-left-3" />
        </div>
        <div className="mb-16 flex w-full flex-col gap-5 md:ml-16 md:max-w-[670px] lg:max-w-[490px]">
          <p className="text-7xl font-bold text-primary" data-aos="fade-left">
            01
          </p>
          <Link href="/ekyc-detail">
            <h3
              className="text-xl font-bold text-primary md:text-2xl"
              data-aos="fade-right"
            >
              eKYC - Định danh khách hàng
            </h3>
          </Link>
          <div data-aos="fade-left" className="space-y-5">
            <p className="font-medium text-neutral-500">
              eKYC là phương thức định danh khách hàng thông qua việc kiểm tra
              và xác minh ảnh trong giấy tờ tùy thân được cung cấp khớp với nhận
              diện của người dùng tại thời điểm trực tuyến bằng công nghệ nhận
              dạng khuôn mặt, nhận diện sự sống và so khớp khuôn mặt dựa trên
              AI.
            </p>
            <p className="font-medium text-neutral-500">
              eKYC chứng thực thông tin khách hàng trong cơ sở dữ liệu gian lận
              tín dụng và đưa ra những cảnh báo rủi ro đến các nhà cung cấp dịch
              vụ.
            </p>
            <p className="font-medium text-neutral-500">
              eKYC giúp giảm thiểu nguồn nhân lực, thuận tiện hơn rất nhiều
              trong việc đơn giản hóa thủ tục, nâng cao trải nghiệm khách hàng,
              nâng cao độ bảo mật, cũng như giúp chuyên viên tư vấn nhận diện
              được người dùng, đồng thời giúp tiết kiệm chi phí cho doanh
              nghiệp.
            </p>
          </div>
          <div data-aos="fade-right">
            <Button className="mt-5 self-center md:self-start">
              Tìm hiểu thêm
            </Button>
          </div>
        </div>
      </div>
      <div className="border-dashed border-neutral-400 md:border-l-2 lg:self-center lg:border-none">
        <div
          className="relative ml-4 h-[300px] w-[297px] md:my-20 md:ml-44 lg:my-0 lg:ml-0"
          data-aos="fade-left"
        >
          <Image
            src="/img/services/ekyc.png"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
}

export default Ekyc;
