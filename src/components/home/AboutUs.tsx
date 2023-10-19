"use client";
import Image from "next/image";
import React, { useEffect } from "react";
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
    <div className="">
      <h2
        className="text-center text-2xl font-bold text-primary md:text-40"
        data-aos="zoom-in"
      >
        Tại sao lựa chọn chúng tôi?
      </h2>
      <div className="mt-20 flex flex-col items-center font-medium md:mt-36 md:h-[300px] md:flex-row md:gap-10">
        <div className="group" data-aos="fade-right" data-aos-duration={400}>
          <div className="flex flex-col gap-8 rounded-xl px-2 py-8 md:py-24 group-hover:md:bg-primary">
            <Image
              src="/svg/home/us/us1.svg"
              alt=""
              width={56}
              height={56}
              className="block self-center object-cover group-hover:md:hidden"
            />
            <Image
              src="/svg/home/us/us1-white.svg"
              alt=""
              width={86}
              height={86}
              className="hidden self-center object-cover group-hover:md:block"
            />
            <div className="flex flex-col">
              <h3 className="text-center text-xl font-bold text-primary group-hover:md:text-white">
                Đội ngũ kĩ sư IT tài năng
              </h3>
              <hr className="my-4 h-[1px] w-[54px] self-center border-gray-200 group-hover:border-white" />
              <p className="hidden max-w-[350px] text-center text-base text-gray-200 md:block group-hover:md:text-white">
                Sở hữu đội ngũ kĩ sư tài năng cùng những chuyên gia AI giàu kinh
                nghiệm.
              </p>
            </div>
          </div>
        </div>

        <div className="group" data-aos="fade-up" data-aos-duration={400}>
          <div className="flex flex-col gap-8 rounded-xl px-2 py-8 md:py-24 group-hover:md:bg-primary">
            <Image
              src="/svg/home/us/us2.svg"
              alt=""
              width={56}
              height={56}
              className="block self-center object-cover group-hover:md:hidden"
            />
            <Image
              src="/svg/home/us/us2-white.svg"
              alt=""
              width={86}
              height={86}
              className="hidden self-center object-cover group-hover:md:block"
            />
            <div className="flex flex-col">
              <h3 className="text-center text-xl font-bold text-primary group-hover:md:text-white">
                Chuyên gia AI giàu kinh nghiệm
              </h3>
              <hr className="my-4 h-[1px] w-[54px] self-center border-gray-200 group-hover:border-white" />
              <p className="hidden max-w-[350px] text-center text-base text-gray-200 md:block group-hover:md:text-white">
                Cung cấp các giải pháp mới nhất giải quyết các vấn đề của ngành
                khoa học máy tính.
              </p>
            </div>
          </div>
        </div>

        <div
          className="group flex flex-col gap-4"
          data-aos="fade-left"
          data-aos-duration={400}
        >
          <div className="flex flex-col gap-8 rounded-xl px-2 py-8 md:py-24 group-hover:md:bg-primary">
            <Image
              src="/svg/home/us/us3.svg"
              alt=""
              width={56}
              height={56}
              className="block self-center object-cover group-hover:md:hidden"
            />
            <Image
              src="/svg/home/us/us3-white.svg"
              alt=""
              width={86}
              height={86}
              className="hidden self-center object-cover group-hover:md:block"
            />
            <div className="flex flex-col">
              <h3 className="text-center text-xl font-bold text-primary group-hover:md:text-white">
                Cung cấp giải pháp uy tín
              </h3>
              <hr className="my-4 h-[1px] w-[54px] self-center border-gray-200 group-hover:border-white" />
              <p className="hidden max-w-[350px] text-center text-base text-gray-200 md:block group-hover:md:text-white">
                Cung cấp các giải pháp hàng đầu cho các đối tác uy tín trên thị
                trường.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
