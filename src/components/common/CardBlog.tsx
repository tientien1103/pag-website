import Image from "next/image";
import Link from "next/link";

interface BlogProps {
  name: string;
  excerpt: string;
  url: string;
  image: string;
}

const CardBlog = ({ name, excerpt, url, image }: BlogProps) => {
  return (
    <Link
      className="flex flex-shrink-0 flex-col overflow-hidden rounded-md bg-white shadow-4xl"
      href={url}
      target="_blank"
    >
      <Image
        className="h-[230px] w-full object-cover"
        width={328}
        height={230}
        src={image}
        alt=""
      />
      <div className="m-5 flex flex-col gap-2">
        <h2 className="line-clamp-2 text-justify text-lg font-semibold text-primary lg:text-xl">
          {name}
        </h2>
        <p className="text-darkGrey line-clamp-2 text-justify text-base">
          {excerpt}
        </p>
      </div>
    </Link>
  );
};

export default CardBlog;
