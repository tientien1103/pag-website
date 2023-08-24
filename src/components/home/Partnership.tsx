"use client"
import partnerArr from "@/mockup/partners";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Partnership() {
  return (
    <div className="relative w-auto space-y-20 overflow-hidden py-14">
      <div className="flex w-[calc(250px*20)] animate-scroll flex-row gap-14">
        {partnerArr.slice(0, 20).map((partner, i) => (
          <Link href="#" key={i + partner.image}>
            <Image
              src={partner.image}
              alt=""
              width={230}
              height={49}
              className="cursor-pointer self-center object-cover hover:scale-110"
            />
          </Link>
        ))}
      </div>
      <div className="flex w-[calc(250px*20)] animate-scroll flex-row gap-10 overflow-hidden">
        {partnerArr.slice(20, 40).map((partner, i) => (
          <Link href="#" key={i + partner.image}>
            <Image
              src={partner.image}
              alt=""
              width={230}
              height={49}
              className="cursor-pointer self-center  object-cover hover:scale-110"
            />
          </Link>
        ))}
      </div>
      <div className="flex w-[calc(250px*20)] animate-scroll flex-row gap-9 overflow-hidden">
        {partnerArr.slice(40, 60).map((partner, i) => (
          <Link href="#" key={i + partner.image}>
            <Image
              src={partner.image}
              alt=""
              width={230}
              height={49}
              className="cursor-pointer self-center object-cover hover:scale-110"
            />
          </Link>
        ))}
      </div>
      <div className="flex w-[calc(250px*20)] animate-scroll flex-row gap-8 overflow-hidden">
        {partnerArr.slice(60, 80).map((partner, i) => (
          <Link href="#" key={i + partner.image}>
            <Image
              src={partner.image}
              alt=""
              width={230}
              height={49}
              className="cursor-pointer self-center object-cover hover:scale-110"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Partnership;
