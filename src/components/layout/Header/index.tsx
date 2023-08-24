"use client";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { Dialog, Popover } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { NAVIGATION } from "./Navigation";
import Logo from "@/components/common/Logo";
import { AiFillCaretUp } from "react-icons/ai";
// import CallbackModal from "@/components/home/CallbackModal";

export default function Header() {
  const pathname = usePathname();
  const [isStickyHeader, setStickyHeader] = useState<boolean>(false);
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

  // useEffect(() => {
  //   if (window.innerWidth < 1024) {
  //     setMobileMenuOpen(false);
  //     window.requestAnimationFrame(() => window.scrollTo(0, 0));
  //   }
  // }, [pathname]);

  return (
    <header
      className={clsx(`top-0 z-10 w-full bg-white`, {
        "transition-all duration-200": isStickyHeader,
      })}
    >
      <nav
        className="container flex max-w-7xl items-center py-6"
        aria-label="Global"
      >
        <div className="flex-1">
          <Link href="/">
            <Logo className="w-20 lg:w-[130px]" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            aria-label="menu"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Image src="/svg/menu.svg" alt="" width={32} height={32} />
          </button>
        </div>
        <Popover.Group className="mr-96 hidden lg:flex lg:items-center lg:gap-x-10">
          {NAVIGATION.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex flex-col items-center text-lg font-bold text-primary hover:-mb-7 hover:-mt-2"
            >
              {item.title}
              <AiFillCaretUp
                className={clsx("hidden text-[20px] group-hover:block", {
                  block: pathname === item.href,
                  hidden: pathname !== item.href,
                })}
              />
            </Link>
          ))}
          {/* <button
            className="text-md rounded-md bg-secondary px-4 py-2.5 font-medium text-white outline-none hover:bg-accent"
            type="button"
            onClick={() => setOpenModal(true)}
          >
            Request a call back
          </button> */}
        </Popover.Group>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="absolute inset-y-0 top-0 z-10 h-screen w-4/5 overflow-y-auto bg-primary">
          <div className="flex items-center justify-between px-4 py-3.5">
            <Link href="/">
              <Logo className="w-[200px]" />
            </Link>
            <button
              aria-label="close menu"
              type="button"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <Image src="/svg/close-icon.svg" alt="" width={32} height={32} />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y-2">
              <div className="flex flex-col items-start pt-8">
                {NAVIGATION.map((item) => (
                  <div
                    key={item.href}
                    className="flex w-full flex-col border-y-[1px] border-[#141414]"
                  >
                    <Link
                      className={clsx(
                        "mx-4 py-3 text-lg font-semibold text-white",
                        {
                          "text-secondary": pathname === item.href,
                        }
                      )}
                      href={item.href}
                    >
                      {item.title}
                    </Link>
                  </div>
                ))}
                {/* <button
                  className="text-md rounded-md bg-secondary px-4 py-2.5 font-medium text-white outline-none hover:bg-accent"
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setOpenModal(true);
                  }}
                >
                  Request a call back
                </button> */}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      {/* <CallbackModal setOpenModal={setOpenModal} openModal={openModal} /> */}
    </header>
  );
}
