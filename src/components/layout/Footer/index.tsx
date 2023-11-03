import Link from "next/link";
import Image from "next/image";

import Logo from "@/components/common/Logo";
import SocialIcon, { SocialIconProps } from "@/components/common/Social";
import FooterMenu from "./Menu";
import Container from "@/components/common/Container";
import { Locale } from "../../../../i18n.config";
import { getDictionary } from "@/libs/dictionary";

export interface INavigation {
  href: string;
  alt: string;
  variant?: INavigation[];
}

// export const SOCIAL_ICONS: SocialIconProps[] = [
//   {
//     link: "#",
//     alt: "Facebook",
//     variant: "facebook",
//   },
//   {
//     link: "#",
//     alt: "Linkedin",
//     variant: "linkedin",
//   },
// ];

export default async function Footer({ lang }: { lang: Locale }) {
  const { navigation, footer } = await getDictionary(lang);

  const NAVIGATION = [
    {
      href: `/${lang}`,
      title: navigation.home,
    },
    {
      href: `/${lang}/services`,
      title: navigation.services,
    },
    {
      href: `/${lang}/blogs`,
      title: navigation.blog,
    },
    {
      href: `/${lang}/contact`,
      title: navigation.contact,
    },
  ];
  return (
    <footer className="relative w-full bg-primary">
      <Container>
        <div className="flex flex-col-reverse items-start gap-4 md:w-[80%] md:flex-row md:items-center md:justify-between md:gap-7 md:py-10 lg:gap-36">
          <div className="flex flex-col gap-7 md:flex-row lg:gap-40">
            <div className="mt-6 w-full md:mt-0 md:max-w-[320px]">
              <p className="mb-6 text-lg font-bold uppercase leading-snug text-white md:text-xl">
                {footer.company}
              </p>
              <div className="space-y-2">
                <p className="text-lg font-bold leading-snug text-white">
                  {footer.mail}
                </p>
                <p className="text-lg font-bold leading-snug text-white">
                  {footer.phone}
                </p>
                <p className="text-justify leading-snug text-white">
                  {footer.address}
                </p>
              </div>
              {/* <div className="flex gap-4">
              {SOCIAL_ICONS.map((item) => (
                <SocialIcon key={item.variant} {...item} />
              ))}
            </div> */}
            </div>
          </div>
          <div className="mt-8 flex h-full items-start justify-start font-bold md:mt-0">
            {/* <FooterMenu
              className="hidden w-full md:block md:w-1/2"
              items={FOOTER_SERVICES_MENU}
            /> */}
            <FooterMenu className="block w-full" items={NAVIGATION} />
          </div>
        </div>
      </Container>
      <p className="p-5 text-center text-xl text-white">
        Copyright © {new Date().getFullYear()} PAG Tech
      </p>
    </footer>
  );
}
