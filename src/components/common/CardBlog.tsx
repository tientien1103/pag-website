import Image from "next/image";
import Link from "next/link";

interface BlogProps {
  name: string;
  excerpt: string;
  // url: string;
}

const CardBlog = ({ name, excerpt }: BlogProps) => {
  return (
    <Link
      className="shadow-4xl flex flex-shrink-0 flex-col overflow-hidden rounded-md bg-white"
      href={`#`}
    >
      <Image
        className="h-[230px] w-full object-cover"
        width={328}
        height={230}
        src={`https://picsum.photos/seed/${Math.random()}/517.webp`}
        alt=""
      />
      <div className="m-5 flex flex-col gap-2">
        <h2 className="line-clamp-2 text-lg font-semibold text-primary lg:text-xl">
          {name}
        </h2>
        <p className="text-darkGrey line-clamp-2 text-base">{excerpt}</p>
      </div>
    </Link>
  );
};

export default CardBlog;
