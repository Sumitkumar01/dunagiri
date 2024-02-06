import React from "react";
import Image from "./Image";
import { FaTimes } from "react-icons/fa";

function ImgPopup({ data, setShow }) {
  return (
    <section className="flex items-center justify-center fixed top-0 left-0 z-50 w-full h-full bg-white">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          {/* <button></button> */}
          <button className="w-[4rem] h-[4rem]" onClick={() => setShow(false)}>
            <FaTimes className="text-5xl text-clrDarkGreen font-extralight" />
          </button>
        </div>
        <div className="flex justify-between items-start gap-5 w-full">
          <Image src={data.imgUrl} />
          <div>
            <h2 className="ff-f lg:text-5xl text-2xl font-normal">
              {data.title}
            </h2>
            <p className="ff-l lg:text-2xl text-xl">{data.desc}</p>
          </div>{" "}
        </div>
      </div>
    </section>
  );
}

export default ImgPopup;
