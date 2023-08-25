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
    href: "/services",
    title: "Sản phẩm",
  },
  {
    href: "/blogs",
    title: "Blog",
  },
  {
    href: "/contact",
    title: "Liên hệ",
  },
];
