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
      <div className="container lg:max-w-5xl" aria-label="Global">
        <div className="md:py-19 flex flex-col-reverse items-start gap-4 py-6 md:flex-row md:items-center md:gap-7 lg:gap-36">
          <div className="flex flex-col gap-7 md:flex-row lg:gap-36">
            <div className="lg:space-y-7">
              <Link href="/" className="-m-1.5 w-fit p-1.5">
                <Logo
                  className="w-[90px] md:mb-6 md:w-[150px]"
                  variant="white"
                  width={124}
                  height={46}
                />
              </Link>
              <p className="text-lg font-bold leading-snug text-white">
                <span>Email: </span>
                <span className="text-accent">contact@e9.digital</span>
              </p>
              <p className="text-lg font-bold leading-snug text-white">
                <span>Số điện thoại: </span>
                <span className="text-accent">0246 327 1144</span>
              </p>
              {/* <div className="flex gap-4">
              {SOCIAL_ICONS.map((item) => (
                <SocialIcon key={item.variant} {...item} />
              ))}
            </div> */}
            </div>
            <div className="flex w-[360px] flex-col gap-6 md:mt-8">
              <p className="leading-snug text-white">
                <span className="text-xl font-bold">TRỤ SỞ CHÍNH</span>
                <br />
                <span className="text-lg text-accent">
                  Tầng 2, số 58 Tố Hữu, quận Nam Từ Liêm, thành phố Hà Nội
                </span>
              </p>
              <p className="leading-snug text-white">
                <span className="text-xl font-bold">VĂN PHÒNG ĐẠI DIỆN</span>
                <br />
                <span className="text-lg text-accent">
                  Tầng 8, số 99 Nguyễn Thị Minh Khai, Quận 1, thành phố Hồ Chí
                  Minh
                </span>
              </p>
            </div>
          </div>
          <div className="flex h-full items-start justify-start font-bold">
            {/* <FooterMenu
              className="hidden w-full md:block md:w-1/2"
              items={FOOTER_SERVICES_MENU}
            /> */}
            <FooterMenu
              className="hidden w-full md:block"
              items={FOOTER_WORK_MENU}
            />
          </div>
        </div>
      </div>
      <p className="p-5 text-center text-xl text-white">
        Copyright © {new Date().getFullYear()} PAG Tech
      </p>
    </footer>
  );
}
