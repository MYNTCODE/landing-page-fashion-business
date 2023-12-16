import React from "react";
import BlogData from "../blog/BlogData";

function Blog() {
  return (
    <>
      <div className=" h-full  p-10">
        <div className="blog-container">
          <h1 className=" text-[50px]  ">FASHION</h1>
          <BlogData />
        </div>
      </div>
    </>
  );
}

export default Blog;
