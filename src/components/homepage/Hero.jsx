import React from "react";
import hero from "../../assets/hero.mp4";
function Hero() {
  return (
    <div className=" h-[100vh]  ">
      <video
        className="h-[100%] w-[100%] object-cover"
        src={hero}
        autoPlay
        loop
        muted
      />
      <div className="text-hero absolute top-20 w-full h-[100%] flex-col justify-center items-center">
        <h1 className=" font-bold text-[50px] lg:text-[200px]" title="MYNT">
          MYNT
        </h1>
      </div>
    </div>
  );
}

export default Hero;
