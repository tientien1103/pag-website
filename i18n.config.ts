export const i18n = {
  defaultLocale: "vn",
  locales: ["vn", "en"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
