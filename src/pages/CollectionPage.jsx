import { useRef } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function CollectionPage() {
  const navigate = useNavigate();
  const contactRef = useRef(null);

  const handleHomeClick = () => {
    navigate(`/`);
  };

  const handleBlogsClick = () => {
    navigate(`/blog`);
  };
  const handleContactClick = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className=" h-[100vh]">
      <NavBar
        handleHomeClick={handleHomeClick}
        handleBlogsClick={handleBlogsClick}
        handleContactClick={handleContactClick}
      />
      <div className="h-[100vh]">
        <div></div>
      </div>
      <div ref={contactRef}>
        <Footer />
      </div>
    </div>
  );
}

export default CollectionPage;
