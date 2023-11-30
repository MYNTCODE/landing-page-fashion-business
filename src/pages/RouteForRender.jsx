import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CollectionPage from "./CollectionPage";
import BlogPage from "./BlogPage";

function RouteForRender() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </>
  );
}

export default RouteForRender;
