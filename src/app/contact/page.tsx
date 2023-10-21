"use client";
import SubBanner from "@/components/common/SubBanner";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactSchema } from "@/schema/Schema";

interface ContactValidation {
  name: string;
  email?: string;
  phone?: string;
}

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ContactSchema),
  });

  const onSubmit = (data: ContactValidation) => {
    console.log(data);
  };

  return (
    <main className="min-h-screen overflow-hidden">
      <section className="mt-6">
        <div className="container max-w-6xl">
          <SubBanner type="liên hệ" />
        </div>
      </section>

      <section className="py-20">
        <div className="container flex max-w-6xl flex-row gap-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.093552638515!2d106.69658797590611!3d10.804146558680062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528c767f98de5%3A0x9be3dda1c0c12ff0!2zNTkgSHXhu7NuaCDEkMOsbmggSGFpLCBQaMaw4budbmcgMTQsIELDrG5oIFRo4bqhbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1697426051836!5m2!1svi!2s"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4 px-5 pb-10 md:px-16 lg:px-0">
              <div className="flex flex-col">
                <input
                  {...register("name")}
                  type="text"
                  placeholder="*Họ và tên"
                  className="border-box w-[350px] rounded-full border border-thirdly border-opacity-40 px-6 py-4 md:w-full lg:w-[429px]"
                />
                {errors.name && (
                  <p className="ml-4 mt-1 text-[#DC143C]">
                    {errors.name?.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <input
                  {...register("email")}
                  type="text"
                  placeholder="*Email"
                  className="border-box w-full rounded-full border border-thirdly border-opacity-40 px-6 py-4 md:w-[429px]"
                />
                {errors.name && (
                  <p className="ml-4 mt-1 text-[#DC143C]">
                    {errors.email?.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <input
                  type="text"
                  {...register("phone")}
                  placeholder="*Số điện thoại"
                  className="border-box w-full rounded-full border border-thirdly border-opacity-40 px-6 py-4 md:w-[429px]"
                />
                {errors.name && (
                  <p className="ml-4 mt-1 text-[#DC143C]">
                    {errors.phone?.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <textarea
                  placeholder="Nhập nội dung..."
                  className="border-box w-full rounded-3xl border border-thirdly border-opacity-40 px-4 py-3 lg:h-[152px] lg:w-[492px]"
                />
              </div>

              <button
                className="rounded-full border bg-blueText px-12 py-5 text-white"
                type="submit"
              >
                Gửi nội dung
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
