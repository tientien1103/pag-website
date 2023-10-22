import Link from "next/link";
import Image from "next/image";

import Logo from "@/components/common/Logo";
import SocialIcon, { SocialIconProps } from "@/components/common/Social";
import FooterMenu from "./Menu";
import { FOOTER_SERVICES_MENU, FOOTER_WORK_MENU } from "@/consts/footer-menu";
import Container from "@/components/common/Container";

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

export default function Footer() {
  return (
    <footer className="relative w-full bg-primary">
      <Container>
        <div className="flex flex-col-reverse items-start gap-4 md:w-[80%] md:flex-row md:items-center md:justify-between md:gap-7 md:py-10 lg:gap-36">
          <div className="flex flex-col gap-7 md:flex-row lg:gap-40">
            <div className="w-full md:max-w-[300px]">
              <Link href="/" className="-m-1.5 w-fit p-1.5">
                <Logo
                  className="w-[90px] md:mb-6 md:w-[150px]"
                  variant="white"
                  width={124}
                  height={46}
                />
              </Link>
              <p className="text-lg font-bold leading-snug text-white">
                sale@pagvn.tech
              </p>
              <p className="text-lg font-bold leading-snug text-white">
                090 8501 090
              </p>
              <p className="leading-snug text-white">
                59 Huỳnh Đình Hai, phường 14, quận Bình Thạnh, thành phố Hồ Chí
                Minh
              </p>
              {/* <div className="flex gap-4">
              {SOCIAL_ICONS.map((item) => (
                <SocialIcon key={item.variant} {...item} />
              ))}
            </div> */}
            </div>
            {/* <div className="flex w-[360px] flex-col gap-6 md:mt-8">
              
              <p className="leading-snug text-white">
                <span className="text-xl font-bold">VĂN PHÒNG ĐẠI DIỆN</span>
                <br />
                <span className="text-lg text-accent">
                  59 Huỳnh Đình Hai, phường 14, quận Bình Thạnh, thành phố Hồ
                  Chí Minh
                </span>
              </p>
            </div> */}
          </div>
          <div className="mt-8 flex h-full items-start justify-start font-bold md:mt-0">
            {/* <FooterMenu
              className="hidden w-full md:block md:w-1/2"
              items={FOOTER_SERVICES_MENU}
            /> */}
            <FooterMenu className="block w-full" items={FOOTER_WORK_MENU} />
          </div>
        </div>
      </Container>
      <p className="p-5 text-center text-xl text-white">
        Copyright © {new Date().getFullYear()} PAG Tech
      </p>
    </footer>
  );
}
