import Link from "next/link";
import clsx from "clsx";

export interface FooterMenuProps {
  className?: string;
  items?: FooterMenuItemProps[];
  key?: string;
}

export interface FooterMenuItemProps {
  className?: string;
  link: string;
  title: string;
}

export interface FooterMenuGroupProps {
  className?: string;
  menus: FooterMenuProps[];
}

export const FooterMenu: React.FC<FooterMenuProps> = ({
  className = "",
  items = [],
}) => {
  return (
    <ul className={clsx("space-y-5", className)}>
      {items && items.length
        ? items.map((item) => <FooterMenuItem key={item.title} {...item} />)
        : null}
    </ul>
  );
};

export const FooterMenuItem: React.FC<FooterMenuItemProps> = ({
  className = "",
  link,
  title,
}) => {
  return (
    <li>
      <Link
        href={link}
        className={clsx("text-base font-semibold text-white", className)}
      >
        {title}
      </Link>
    </li>
  );
};

export const FooterMenuGroup: React.FC<FooterMenuGroupProps> = ({
  className = "",
  menus = [],
}) => {
  return (
    <div className={clsx("flex gap-4", className)}>
      {menus && menus.length
        ? menus.map((item) => <FooterMenu key={item.key} {...item} />)
        : null}
    </div>
  );
};

export default FooterMenu;
