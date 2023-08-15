import clsx from "clsx";
import fb from "@/asset/icons/icon_social_fb.svg";
import linkedin from "@/asset/icons/icon_social_linkedin.svg";
import Link from "next/link";
import Image from "next/image";

export interface SocialIconProps {
  className?: string;
  link?: string;
  alt?: string;
  variant: "linkedin" | "facebook" | "twitter" | "instagram" | "youtube";
  size?: "sm" | "md" | "lg";
}

const SocialIcon: React.FC<SocialIconProps> = ({
  className = "",
  link = "",
  variant,
  size = "md",
  alt = "",
}) => {
  return (
    <Link href={link} target="blank">
      <div
        className={clsx(
          mapIconSize(size),
          "flex items-center justify-center rounded bg-white",
          className
        )}
      >
        <Image priority src={mapVariantSrc(variant)} alt={alt} />
      </div>
    </Link>
  );
};

const mapIconSize = (size: "sm" | "md" | "lg") => {
  switch (size) {
    case "sm":
      return "h-5 w-5";
    case "md":
      return "h-9 w-9";
    case "lg":
      return "h-12 w-12";
  }
};

const mapVariantSrc = (
  variant: "linkedin" | "facebook" | "twitter" | "instagram" | "youtube"
) => {
  switch (variant) {
    case "linkedin":
      return linkedin;
    case "facebook":
      return fb;
    case "twitter":
    case "instagram":
    case "youtube":
      return "";
  }
};

export default SocialIcon;
