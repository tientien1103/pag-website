import Link from "next/link";
import Image from "next/image";

import Logo from "@/components/common/Logo";
import SocialIcon, { SocialIconProps } from "@/components/common/Social";
import FooterMenu from "./Menu";
import { FOOTER_SERVICES_MENU, FOOTER_WORK_MENU } from "@/consts/footer-menu";

export interface INavigation {
  href: string;
  alt: string;
  variant?: INavigation[];
}

export const SOCIAL_ICONS: SocialIconProps[] = [
  {
    link: "#",
    alt: "Facebook",
    variant: "facebook",
  },
  {
    link: "#",
    alt: "Linkedin",
    variant: "linkedin",
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-primary">
      <div className="container max-w-1072" aria-label="Global">
        <div className="flex flex-col-reverse items-start lg:justify-center lg:items-center gap-12 py-12 lg:flex-row lg:gap-16 lg:py-19">
          <div className="flex flex-col md:gap-7">
            <Link href="/" className="-m-1.5 w-fit p-1.5">
              <Logo
                className="w-[84px] md:w-[124px] mb-6"
                variant="white"
                width={124}
                height={46}
              />
            </Link>
            <p className="text-lg leading-snug font-bold text-white">
              <span>Email: </span>
              <span className="text-accent">contact@e9.digital</span>
            </p>
            <p className="text-lg leading-snug text-white font-bold">
              <span>Số điện thoại: </span>
              <span className="text-accent">0246 327 1144</span>
            </p>
            {/* <div className="flex gap-4">
              {SOCIAL_ICONS.map((item) => (
                <SocialIcon key={item.variant} {...item} />
              ))}
            </div> */}
          </div>
          <div className="flex flex-col w-[360px] gap-6 md:mt-0">
            <p className="leading-snug text-white">
              <span className="font-bold text-xl">TRỤ SỞ CHÍNH</span>
              <br />
              <span className="text-accent text-lg">
                Tầng 2, số 58 Tố Hữu, quận Nam Từ Liêm, thành phố Hà Nội
              </span>
            </p>
            <p className="leading-snug text-white">
              <span className="font-bold text-xl">VĂN PHÒNG ĐẠI DIỆN</span>
              <br />
              <span className="text-accent text-lg">
                Tầng 8, số 99 Nguyễn Thị Minh Khai, Quận 1, thành phố Hồ Chí
                Minh
              </span>
            </p>
          </div>
          <div className="flex h-full items-start md:mt-0 font-bold justify-start gap-16">
            <FooterMenu className="w-full" items={FOOTER_SERVICES_MENU} />
            <FooterMenu className="lg:w-1/2 w-full" items={FOOTER_WORK_MENU} />
          </div>
        </div>
      </div>
      <p className="text-xl text-white text-center p-5">
        Copyright © {new Date().getFullYear()} PAG Tech
      </p>
    </footer>
  );
}
