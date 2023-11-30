import React from "react";
import { Link } from "react-router-dom";

function NavBar({ handleHomeClick, handleBlogsClick, handleContactClick }) {
  return (
    <>
      <nav className="navbar ">
        <ul className=" flex justify-evenly gap-10">
          <li onClick={handleHomeClick}>Home </li>
          <Link to={`/collection`}>
            <li>Collection</li>
          </Link>
          <li onClick={handleBlogsClick}>Blogs</li>
          <li onClick={handleContactClick}>Contact</li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
