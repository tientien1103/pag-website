import React from "react";
import Container from "@/components/common/Container";
import Image from "next/image";
import { Locale } from "../../../../i18n.config";
import { getDictionary } from "@/libs/dictionary";

export default async function ContactPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  return (
    <main className="min-h-screen overflow-hidden">
      <section className="mt-6">
        <div className="container max-w-6xl">
          <div className="space-y-4 pt-4 text-center md:pt-10">
            <h1 className="text-center text-5xl font-bold uppercase text-primary md:text-6xl">
              {page.contact.title}
            </h1>
            <p className="text-sm font-bold uppercase text-primary md:text-2xl">
              {page.contact.subtitle}
            </p>
            <p className="text-sm font-bold uppercase text-secondary md:text-base">
              {page.contact.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <Container className="flex flex-col gap-8 md:flex-row md:gap-5">
          <div className="space-y-4">
            <h3 className="leading-14 text-4xl text-primary">
              {page.contact.subtitle2}
            </h3>

            <div className="space-y-2">
              <p className="font-semibold text-secondary">
                {page.contact.company}
              </p>
              <div className="flex gap-2">
                <Image
                  src="/svg/contact/company-icon.svg"
                  alt=""
                  width={24}
                  height={24}
                />
                <p className="max-w-[250px] uppercase text-neutral-600">
                  {page.contact.company2}
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-secondary">
                {page.contact.address}
              </p>
              <div className="flex gap-2">
                <Image
                  src="/svg/contact/location-icon.svg"
                  alt=""
                  width={24}
                  height={24}
                />
                <p className="max-w-[300px] text-neutral-600">
                  {page.contact.address2}
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-secondary">
                {page.contact.phone}
              </p>
              <div className="flex gap-2">
                <Image
                  src="/svg/contact/phone-icon.svg"
                  alt=""
                  width={24}
                  height={24}
                />
                <p className="text-neutral-600">{page.contact.phone2}</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-secondary">Email</p>
              <div className="flex gap-2">
                <Image
                  src="/svg/contact/mail-icon.svg"
                  alt=""
                  width={24}
                  height={24}
                />
                <p className="text-neutral-600">{page.contact.email}</p>
              </div>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.093552638515!2d106.69658797590611!3d10.804146558680062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528c767f98de5%3A0x9be3dda1c0c12ff0!2zNTkgSHXhu7NuaCDEkMOsbmggSGFpLCBQaMaw4budbmcgMTQsIELDrG5oIFRo4bqhbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1697426051836!5m2!1svi!2s"
            allowFullScreen
            loading="lazy"
            className="h-[660px] w-full md:h-[450px] md:w-[800px]"
          ></iframe>
        </Container>
      </section>
    </main>
  );
}
