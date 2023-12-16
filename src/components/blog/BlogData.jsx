import React from "react";
import fashionBlog from "../../data/fashionBlog.json";
import { Link } from "react-router-dom";

function BlogData() {
  return (
    <>
      <div>
        <div className=" lg:flex gap-10 lg:gap-5 justify-evenly h-[100%] w-[100%]">
          {fashionBlog.map((blog, index) => (
            <div className=" m-10" key={index}>
              <Link to={`/blog`}>
                <img
                  className=" lg:h-[300px] rounded-tr-3xl rounded-bl-3xl object-cover"
                  src={blog.img}
                />
              </Link>
              <p className=" md:text-[20px] lg:text-[20px] p-5 md:p-10">
                {blog.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogData;
