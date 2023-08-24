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
    href: "/product",
    title: "Sản phẩm",
  },
  {
    href: "/blog",
    title: "Blog",
  },
  {
    href: "/contact",
    title: "Liên hệ",
  },
];
