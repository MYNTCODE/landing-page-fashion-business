import React from "react";
import fashionBlog from "../../data/fashionBlog.json";
import { Link } from "react-router-dom";

function BlogData() {
  return (
    <>
      <div>
        <div className=" lg:flex gap-10 lg:gap-5 justify-evenly h-[100%] w-[100%]">
          {fashionBlog.map((blog, index) => (
            <div className=" m-8" key={index}>
              <img
                className=" lg:h-[300px] rounded-tr-3xl rounded-bl-3xl object-cover"
                src={blog.img}
              />

              <p className=" md:text-[20px] lg:text-[20px] p-5 md:p-10">
                {blog.title}
              </p>
            </div>
          ))}{" "}
        </div>
        <Link to={`/blog`}>
          <button className="border p-5 py-2 mt-[-10px]">Read more</button>
        </Link>
      </div>
    </>
  );
}

export default BlogData;
