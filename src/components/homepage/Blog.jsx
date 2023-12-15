import React from "react";
import BlogData from "../blog/BlogData";

function Blog() {
  return (
    <>
      <div className=" h-[100vh] border p-10">
        <div className="blog-container">
          <BlogData />
        </div>
      </div>
    </>
  );
}

export default Blog;
