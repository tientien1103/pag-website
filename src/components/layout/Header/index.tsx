import { Fragment } from "react";
import { Locale } from "../../../../i18n.config";
import { getDictionary } from "@/libs/dictionary";
import NavBar from "./NavBar";

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  return (
    <Fragment>
      <NavBar lang={lang} navigation={navigation} />
    </Fragment>
  );
}
