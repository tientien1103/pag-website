"use client";
import SubBanner from "@/components/common/SubBanner";
import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { ContactSchema } from "@/schema/Schema";

interface ContactValidation {
  name: string;
  email?: string;
  phone?: string;
}

export default function ContactPage() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

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

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <main className="min-h-screen overflow-hidden">
      <section className="mt-6">
        <div className="container max-w-6xl">
          <SubBanner type="liên hệ" image="/img/contact-banner.png" />
        </div>
      </section>

      <section className="py-20">
        <div className="container flex max-w-6xl flex-row gap-5">
          <Map />
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
function Map() {
  const center = useMemo(() => ({ lat: 21, lng: 106 }), []);
  return (
    <GoogleMap
      zoom={15}
      center={center}
      mapContainerClassName="w-full h-auto md:block hidden"
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
