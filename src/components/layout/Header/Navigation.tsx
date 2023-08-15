export interface INavigation {
  href: string;
  title: string;
  children?: INavigation[];
}

export const NAVIGATION: INavigation[] = [
  {
    href: "/",
    title: "Trang chủ",
  },
  {
    href: "#",
    title: "Sản phẩm",
  },
  {
    href: "#",
    title: "Blog",
  },
  {
    href: "#",
    title: "Liên hệ",
  },
];
