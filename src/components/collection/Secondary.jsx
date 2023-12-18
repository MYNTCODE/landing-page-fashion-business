import React from "react";
import example from "../../assets/example-collection.mp4";
import "./Collections.css";

function Secondary() {
  return (
    <>
      <div className="Secondary h-full flex-col justify-center items-center md:px-[10%] ">
        <div className="video flex justify-center items-center gap-10">
          <video
            className=" object-cover md:w-[50%]"
            src={example}
            autoPlay
            loop
            muted
          />
          <div className=" hidden md:block ">
            <h1 className="slideDown text-left">
              {" "}
              Welcome to MYNT's latest collection - an embodiment of style,
              sophistication, and contemporary fashion. "Mimart" is a fusion of
              ethereal beauty, simplicity, and the modern woman's desire for
              grace and confidence. This collection reflects our commitment to
              embracing individuality, celebrating femininity, and showcasing
              the artistry of fashion.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Secondary;
