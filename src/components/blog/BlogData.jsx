import React from "react";
import fashionBlog from "../../data/fashionBlog.json";

function BlogData() {
  return (
    <>
      <div>
        <h1>Blogs</h1>
        <div className="border lg:flex gap-10 lg:gap-5 justify-evenly h-[100%] w-[100%]">
          {fashionBlog.map((blog, index) => (
            <div className="" key={index}>
              <img className=" lg:h-[300px]  object-cover" src={blog.img} />
              <p>{blog.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogData;
