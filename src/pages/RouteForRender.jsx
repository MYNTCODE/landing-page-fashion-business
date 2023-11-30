import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";

function RouteForRender() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default RouteForRender;
