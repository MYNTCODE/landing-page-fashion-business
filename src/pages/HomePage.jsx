import NavBar from "../components/NavBar";
import { useRef, useState, useEffect } from "react";
import Header from "../components/homepage/Header";
import Blog from "../components/homepage/Blog";
import Footer from "../components/Footer";

function HomePage() {
  const homeRef = useRef(null);
  const blogsRef = useRef(null);
  const contactRef = useRef(null);

  const handleHomeClick = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleBlogsClick = () => {
    blogsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <NavBar
        handleHomeClick={handleHomeClick}
        handleBlogsClick={handleBlogsClick}
        handleContactClick={handleContactClick}
      />
      <div className=" space-y-10">
        <div ref={homeRef}>
          <Header />
        </div>
        <div ref={blogsRef}>
          <Blog />
        </div>
        <div ref={contactRef}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HomePage;
