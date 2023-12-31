import React from "react";
import BlogList from "@/components/common/blogs/BlogList";
import Container from "@/components/common/Container";

const BlogsPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#F7F7F7]">
      <section className="my-[60px] flex w-full flex-col lg:my-20">
        <Container>
          <div className="mb-12 flex flex-col items-center gap-5 text-center lg:mb-20">
            <h1 className="text-4xl font-semibold text-primary lg:text-[54px]">
              PAG BLOGS
            </h1>
          </div>
          <BlogList />
        </Container>
      </section>
    </main>
  );
};

export default BlogsPage;
