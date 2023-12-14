import React, { useRef } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function BlogPage() {
  const navigate = useNavigate();
  const contactRef = useRef(null);

  const handleHomeClick = () => {
    navigate(`/`);
  };

  const handleCollectionClick = () => {
    navigate(`/collection`);
  };
  const handleBlogsClick = () => {
    navigate(`/blog`);
  };
  const handleContactClick = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <NavBar
        handleHomeClick={handleHomeClick}
        handleCollectionClick={handleCollectionClick}
        handleBlogsClick={handleBlogsClick}
        handleContactClick={handleContactClick}
      />
      <div className=" h-[100vh]"></div>
      <div ref={contactRef}>
        <Footer />
      </div>
    </>
  );
}

export default BlogPage;
