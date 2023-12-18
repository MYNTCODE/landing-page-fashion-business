import React from "react";
import fashionBlog from "../../data/fashionBlog.json";

function BlogPost() {
  return (
    <>
      <div className="Blog-Post">
        <div className="Blog-container space-y-10 mt-10 mb-20">
          {fashionBlog.map((blog, index) => (
            <div className="blog" key={index}>
              <div className=" md:flex justify-center md:px-[10%] text-center md:gap-10 ">
                <img
                  className=" md:w-[50%] md:h-[500px] object-cover"
                  src={blog.img}
                />
                <div className="BlogText mx-[10%] md:mx-0 h-[300px] mt-[10%] text-left">
                  <h1 className="text-[40px]"> {blog.title}</h1>
                  <p>{blog.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogPost;
