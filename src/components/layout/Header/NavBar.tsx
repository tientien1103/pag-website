"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";

import Menu from "./Menu";
import Logo from "@/components/common/Logo";
import Container from "@/components/common/Container";
import { Locale } from "../../../../i18n.config";
import LocaleSwitcher from "@/components/common/LocaleSwitcher";

export default function NavBar({
  lang,
  navigation,
}: {
  lang: Locale;
  navigation: any;
}) {
  const pathname = usePathname();
  const [isStickyHeader, setStickyHeader] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

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

  useLayoutEffect(() => {
    if (window.scrollY > 0) {
      setStickyHeader(true);
    }
    document.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setStickyHeader(true);
      } else {
        setStickyHeader(false);
      }
    });
    return () => document.removeEventListener("scroll", () => {});
  }, []);

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
    setMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <header
      className={clsx(
        "relative inset-x-0 top-0 z-10 transition-colors duration-200",
        {
          "sticky bg-white shadow-lg": isStickyHeader,
          "absolute border-b-2 border-primary bg-transparent": !isStickyHeader,
        }
      )}
    >
      <Container>
        <nav
          className="flex items-center justify-between py-3"
          aria-label="Global"
        >
          <Link href={`/${lang}`}>
            <Logo className="h-10 w-36 object-contain" />
          </Link>
          <Menu
            isOpen={mobileMenuOpen}
            onChangeMobileMenu={onChangeMobileMenu}
          />
          <ul
            className={clsx(
              "hidden items-center gap-x-12 font-bold text-primary md:static md:flex md:h-auto md:flex-row md:bg-transparent md:px-0 md:pt-0",
              {
                "absolute left-0 right-0 top-[54px] !flex h-screen flex-col bg-primary px-4 pt-4 text-white":
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
            <li className="mt-6 md:mt-0">
              <LocaleSwitcher />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
