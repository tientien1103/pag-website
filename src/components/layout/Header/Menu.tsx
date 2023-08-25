import clsx from "clsx";

interface MenuProps {
  isOpen: boolean;
  onChangeMobileMenu: () => void;
}

const Menu = ({ isOpen, onChangeMobileMenu }: MenuProps) => {
  return (
    <button
      onClick={onChangeMobileMenu}
      className="flex flex-col items-center justify-center md:hidden"
    >
      <span
        className={clsx(
          "block h-0.5 w-6 rounded-sm bg-primary transition-all duration-300 ease-out",
          {
            "translate-y-1.5 rotate-45": isOpen,
            "-translate-y-0.5": !isOpen,
          }
        )}
      ></span>
      <span
        className={clsx(
          "my-1 block h-0.5 w-6 rounded-sm bg-primary transition-all duration-300 ease-out",
          {
            "opacity-0": isOpen,
            "opacity-100": !isOpen,
          }
        )}
      ></span>
      <span
        className={clsx(
          "block h-0.5 w-6 rounded-sm bg-primary transition-all duration-300 ease-out",
          {
            "-translate-y-1.5 -rotate-45": isOpen,
            "translate-y-0.5": !isOpen,
          }
        )}
      ></span>
    </button>
  );
};

export default Menu;
