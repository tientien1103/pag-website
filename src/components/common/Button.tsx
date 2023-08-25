import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
}

export default function Button({ className, children }: ButtonProps) {
  return (
    <button
      className={clsx(
        "w-40 rounded-full border-2 border-blueText px-4 py-2 font-bold text-blueText",
        { [`${className}`]: !!className }
      )}
    >
      {children}
    </button>
  );
}
