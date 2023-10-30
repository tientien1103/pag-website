"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BLogsList from "@/mockup/blogs";
import CardBlog from "../common/CardBlog";
import Button from "../common/Button";
import { Locale } from "../../../i18n.config";

function Media({ page, lang }: { page: any; lang: Locale }) {
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
      <div className="flex flex-row justify-between">
        <h2
          className="text-start text-xl font-bold text-primary md:text-center md:text-5xl"
          data-aos="zoom-in"
        >
          {page.home.media.title}
        </h2>
        <Link data-aos="zoom-in" href={`/${lang}/blogs`}>
          <Button>{page.common.button} &#8594;</Button>
        </Link>
      </div>

      <div
        data-aos="fade-up"
        className="grid grid-cols-1 gap-9 py-20 sm:grid-cols-2 md:py-28 lg:grid-cols-3"
      >
        {BLogsList.slice(0, 3).map((blog) => {
          if (!blog) return null;
          return (
            <CardBlog
              key={blog.title}
              name={blog.title || ""}
              // url={blog.thumbnail?.url || ""}
              excerpt={blog.subTitle || ""}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Media;
