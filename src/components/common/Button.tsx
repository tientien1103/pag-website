import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode;
  className?: string;
}

export default function Button({
  className,
  children,
  ...otherProps
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-lg border-2 border-primary bg-primary px-4 py-2 font-bold text-white hover:border-secondary hover:bg-secondary",
        { [`${className}`]: !!className }
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}
