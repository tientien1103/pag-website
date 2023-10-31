"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { i18n } from "../../../i18n.config";
import Link from "next/link";

function LocaleSwitcher() {
  const pathname = usePathname();
  const [isSelecting, setIsSelecting] = useState(false);

  const redicrectPathname = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };
  return (
    <ul className="flex gap-x-3">
      {i18n.locales.map((locale) => {
        return (
          <li key={locale}>
            <Link
              href={redicrectPathname(locale)}
              className="rounded-md border bg-primary px-3 py-2 text-white hover:bg-secondary"
            >
              {locale}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default LocaleSwitcher;
