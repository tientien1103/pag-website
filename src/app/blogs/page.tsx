import SubBanner from "@/components/common/SubBanner";
import BLogsList from "@/mockup/blogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function BlogsPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <section className="mt-6">
        <div className="container max-w-6xl">
          <SubBanner type="blog" image="/img/blog-banner.png" />
        </div>
      </section>

      <section className="my-32">
        <div className="container max-w-6xl">
          <div className="mx-4 flex flex-col gap-28 md:mx-20">
            {BLogsList.map((blog) => (
              <div
                key={blog.title}
                className="flex flex-col gap-12 md:flex-row"
              >
                <div className="relative h-[196px] w-[348px] self-center">
                  <Image
                    loading="eager"
                    src={`https://picsum.photos/seed/${Math.random()}/517.webp`}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="w-full space-y-4 md:mx-0 md:max-w-[590px]">
                  <Link href="#">
                    <h3 className="cursor-pointer text-xl font-bold text-primary md:text-3xl">
                      {blog.title}
                    </h3>
                  </Link>
                  <p className="text-neutral-600">{blog.subTitle}</p>
                  <Link href="#">
                    <div className="mt-4 flex flex-row gap-2">
                      <p className="font-bold text-primary">Đọc thêm</p>
                      <Image
                        loading="eager"
                        src="/svg/right-arrow-darkBlue.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="object-cover"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default BlogsPage;
