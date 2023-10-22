import React from "react";
import Image from "next/image";
import clsx from "clsx";

interface PaginationProps {
  totalBlogs: number | undefined;
  blogPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}

const Pagination = ({
  totalBlogs,
  blogPerPage,
  setCurrentPage,
  currentPage,
}: PaginationProps) => {
  let pages = [];
  const next = () => {
    if (currentPage === pages.length) return;

    setCurrentPage(currentPage + 1);
  };

  const prev = () => {
    if (currentPage === 1) return;

    setCurrentPage(currentPage - 1);
  };
  if (totalBlogs)
    for (let i = 1; i <= Math.ceil(totalBlogs / blogPerPage); i++) {
      pages.push(i);
    }
  return (
    <div className="mt-[32px] flex flex-row justify-center">
      <button onClick={prev} className="mr-8 text-xl text-primary">
        ←
      </button>
      {pages.map((page, i) => {
        return (
          <button
            className={clsx("mr-8 font-semibold", {
              "text-primary": page === currentPage,
              "text-darkGrey": page !== currentPage,
            })}
            key={i}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
      <button onClick={next} className="text-xl text-primary">
        →
      </button>
    </div>
  );
};

export default Pagination;
