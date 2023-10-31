import "server-only";
import { Locale } from "../../i18n.config";

const dictionaries: any = {
  vn: () => import("@/dictionaries/vn.json").then((module) => module.default),
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
