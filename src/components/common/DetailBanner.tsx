"use client";
import React from "react";
interface DetailBannerProps {
  title: string;
  subTitle: string;
  description: string;
}

function DetailBanner({ title, subTitle, description }: DetailBannerProps) {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-center text-5xl font-bold text-primary md:text-6xl">
        {title}
      </h1>
      <p className="mdtext-3xl text-2xl font-bold text-primary">{subTitle}</p>
      <p className="mx-7 w-full text-center text-sm font-bold tracking-wider text-secondary md:mx-0 md:max-w-[500px] md:text-base md:tracking-normal">
        {description}
      </p>
    </div>
  );
}

export default DetailBanner;
