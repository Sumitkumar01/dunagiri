import React from "react";
import Image from "./Image";

function ImgPopup({data}) {
  return (
    <section className="flex items-center justify-center fixed top-0 left-0 z-50 w-full h-full bg-white">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
            <button></button>
            <button></button>
        </div>
        <div className="flex justify-between items-start">
          <Image />
          <h2 className="ff-f">{data.title}</h2>
          <p className="ff-l">{data.desc}</p>
        </div>
      </div>
    </section>
  );
}

export default ImgPopup;
