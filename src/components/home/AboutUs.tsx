"use client"
import Image from 'next/image'
import React,{ useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function AboutUs() {
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
        Tại sao lựa chọn chúng tôi?
      </h2>
      <div className="flex-col my-20 flex lg:flex-row items-center gap-10 font-medium">
        <div
          className="flex flex-col gap-4"
          data-aos="fade-right"
          data-aos-duration={400}
        >
          <Image
            src="/img/home/us/team.png"
            alt=""
            width={150}
            height={150}
            className="self-center object-cover"
          />
          <h3 className="text-center text-xl font-bold text-primary">
            Đội ngũ kĩ sư IT tài năng
          </h3>
          <p className="text-base text-secondary max-w-[550px]">
            Sở hữu đội ngũ kĩ sư tài năng cùng những chuyên gia AI giàu kinh
            nghiệm mang tới những giải pháp hàng đầu trong việc hỗ trợ giải
            quyết các bài toán của thị trường tài chính.
          </p>
        </div>
        <div
          className="flex flex-col gap-4"
          data-aos="fade-up"
          data-aos-duration={400}
        >
          <Image
            src="/img/home/us/expert.png"
            alt=""
            width={150}
            height={150}
            className="self-center object-cover"
          />
          <h3 className="text-center text-xl font-bold text-primary">
            Chuyên gia AI giàu kinh nghiệm
          </h3>
          <p className="text-base text-secondary max-w-[550px]">
            Cung cấp các giải pháp mới nhất giải quyết các vấn đề của ngành
            hoa học học máy nhằm hỗ trợ các tổ chức tài chính trong việc
            xác thực thông tin và dự báo rủi ro.
          </p>
        </div>
        <div
          className="flex flex-col gap-4"
          data-aos="fade-left"
          data-aos-duration={400}
        >
            <Image
              src="/img/home/us/solution.png"
              alt=""
              width={150}
              height={150}
              className="self-center object-cover"
            />
            <h3 className="text-center text-xl font-bold text-primary">
              Cung cấp giải pháp uy tín
            </h3>
            <p className="text-base text-secondary max-w-[550px]">
              Cung cấp các giải pháp hàng đầu cho các đối tác uy tín trên thị
              trường, đem lại hiệu quả về tính minh bạch và độ bảo mật, tin
              cậy cao.
            </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs