import React from "react";
import { Link } from "react-router-dom";

function NavBar({ handleHomeClick, handleBlogsClick, handleContactClick }) {
  return (
    <>
      <nav className="navbar sticky top-0 z-[100]">
        <ul className=" flex justify-evenly gap-10 w-full px-[40%] py-[15px]  bg-black">
          <li className=" hover:cursor-pointer " onClick={handleHomeClick}>
            Home{" "}
          </li>
          <Link to={`/collection`}>
            <li className=" hover:cursor-pointer ">Collection</li>
          </Link>
          <li className=" hover:cursor-pointer " onClick={handleBlogsClick}>
            Blogs
          </li>
          <li className=" hover:cursor-pointer " onClick={handleContactClick}>
            Contact
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
