"use client";
import Image from "next/image";
import logo from "@/asset/logo.png";
import logo_white from "@/asset/logo_white.png";

interface LogoProps {
  className?: string;
  variant?: "primary" | "white";
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({
  className = "",
  variant = "primary",
  width = 100,
  height = 37,
}) => {
  return (
    <Image
      loading="eager"
      className={`${className}`}
      priority
      width={width}
      height={height}
      src={variant == "primary" ? logo : logo_white}
      alt="E9 Logo"
    />
  );
};

export default Logo;
