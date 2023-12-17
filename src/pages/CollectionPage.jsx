import { useRef } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Primary from "../components/collection/Primary";
import Secondary from "../components/collection/Secondary";
import CollectionMimart from "../components/collection/CollectionMimart";

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
    <div className=" h-full">
      <NavBar
        handleHomeClick={handleHomeClick}
        handleBlogsClick={handleBlogsClick}
        handleContactClick={handleContactClick}
      />
      <div className="h-full">
        <Primary />
      </div>
      <div className="h-full">
        <Secondary />
      </div>
      <div className="h-full pt-10 pb-20">
        <CollectionMimart />
      </div>
      <div ref={contactRef}>
        <Footer />
      </div>
    </div>
  );
}

export default CollectionPage;
