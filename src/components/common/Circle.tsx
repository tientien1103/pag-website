import clsx from "clsx";
import React from "react";

interface CircleProps {
  className?: string;
}

function Circle({ className }: CircleProps) {
  return (
    <div
      className={clsx("relative", {
        [`${className}`]: !!className,
      })}
    >
      <div className="absolute w-3 rounded-full border bg-[#e0e4fd] p-3" />
      <div className="absolute left-1.5 top-1.5 w-1.5 rounded-full border bg-blueText p-1.5" />
    </div>
  );
}

export default Circle;
