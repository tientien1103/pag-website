"use client";
import React from "react";

interface SubBannerProps {
  type: string;
  product?: string;
}

function SubBanner({ type, product }: SubBannerProps) {
  return (
    <div className="space-y-4 pt-4 text-center md:pt-10">
      <h1 className="text-center text-5xl font-bold uppercase text-primary md:text-6xl">
        {type}
      </h1>
      <p className="text-sm font-bold text-primary md:text-base">
        PAG - Công ty công nghệ Dữ liệu lớn và Học máy
      </p>
      <p className="hidden text-lg font-bold uppercase text-secondary md:block">
        {product}
      </p>
    </div>
  );
}

export default SubBanner;
