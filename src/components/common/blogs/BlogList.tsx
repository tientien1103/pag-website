"use client";
import blogs from "@/mockup/blogs";
import React, { useState } from "react";
import Pagination from "./Pagination";
import CardBlog from "../CardBlog";
import BLogsList from "@/mockup/blogs";
// import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
// import { GET_POST_ALL } from "@/gql/blog";

// import {
//   PostOrder,
//   Query,
//   QueryPostCollectionArgs,
// } from "@/@generated/graphql-types";

// export const dynamic = "force-dynamic";

const BLOGS_PER_PAGE = 9;

function BlogList() {
  // const { data } = useSuspenseQuery<Query, QueryPostCollectionArgs>(
  //   GET_POST_ALL,
  //   {
  //     variables: {
  //       order: [PostOrder.CreatedAtDesc],
  //     },
  //   }
  // );

  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalBlogs = BLogsList.length;
  const lastBlogIndex = currentPage * BLOGS_PER_PAGE;
  const firstBlogIndex = lastBlogIndex - BLOGS_PER_PAGE;
  return (
    <>
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3">
        {BLogsList.slice(firstBlogIndex, lastBlogIndex).map((blog) => {
          if (!blog) return null;
          return (
            <CardBlog
              key={blog.title}
              name={blog.title || ""}
              // url={blog.thumbnail?.url || ""}
              // slug={blog.slug || ""}
              excerpt={blog.subTitle || ""}
            />
          );
        })}
      </div>
      <Pagination
        setCurrentPage={setCurrentPage}
        totalBlogs={totalBlogs}
        blogPerPage={BLOGS_PER_PAGE}
        currentPage={currentPage}
      />
    </>
  );
}

export default BlogList;
