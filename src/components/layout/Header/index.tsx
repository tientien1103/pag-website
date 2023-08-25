"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";

import Menu from "./Menu";
import { NAVIGATION } from "./Navigation";
import Logo from "@/components/common/Logo";

export default function Header() {
  const pathname = usePathname();
  // const [isStickyHeader, setStickyHeader] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  // const [openModal, setOpenModal] = useState<boolean>(false);

  // useLayoutEffect(() => {
  //   if (window.scrollY > 0) {
  //     setStickyHeader(true);
  //   }
  //   document.addEventListener("scroll", () => {
  //     if (window.scrollY > 0) {
  //       setStickyHeader(true);
  //     } else {
  //       setStickyHeader(false);
  //     }
  //   });
  //   return () => document.removeEventListener("scroll", () => {});
  // }, []);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setMobileMenuOpen(false);
      window.requestAnimationFrame(() => window.scrollTo(0, 0));
    }
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [mobileMenuOpen]);

  const onChangeMobileMenu = useCallback(() => {
    // setStickyHeader(true);
    setMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <header className="relative inset-x-0 top-0 z-10 transition-colors duration-200">
      <div className="container max-w-screen-xl">
        <nav
          className="flex items-center justify-between py-3"
          aria-label="Global"
        >
          <Link href="/">
            <Logo />
          </Link>
          <Menu
            isOpen={mobileMenuOpen}
            onChangeMobileMenu={onChangeMobileMenu}
          />
          <ul
            className={clsx(
              "hidden items-center gap-x-12 font-bold text-white md:static md:flex md:h-auto md:flex-row md:bg-transparent md:px-0 md:pt-0 md:text-primary",
              {
                "absolute left-0 right-0 top-[54px] !flex h-screen flex-col bg-primary px-4 pt-4":
                  mobileMenuOpen,
              }
            )}
          >
            {NAVIGATION.map((item) => {
              return (
                <li
                  className={clsx(
                    "relative w-full whitespace-nowrap border-b border-b-white py-2.5 text-left md:border-none md:py-0 md:uppercase md:underline-offset-[7px] after:md:absolute after:md:-bottom-0.5 after:md:left-0 after:md:h-0.5 after:md:w-0 after:md:bg-primary after:md:transition-all after:md:duration-300 after:md:hover:w-full",
                    {
                      "md:underline": pathname === item.href,
                    }
                  )}
                  key={item.href}
                >
                  <Link href={item.href}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
