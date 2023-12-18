import React from "react";
import mimart001 from "./Mimart/mimart001.jpg";
import mimart002 from "./Mimart/mimart002.jpg";
import mimart003 from "./Mimart/mimart003.jpg";

function CollectionMimart() {
  return (
    <>
      <div className="collections md:px-[10%] ">
        <div className="text-[50px]  px-10 text-left md:p-10">Mimart</div>
        <div className=" md:flex  md:w-[34%] gap-10">
          <img src={mimart001} />
          <img src={mimart002} />
          <img src={mimart003} />
        </div>
      </div>
    </>
  );
}

export default CollectionMimart;
