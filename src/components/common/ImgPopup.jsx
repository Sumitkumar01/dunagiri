import React, { useState } from "react";
import Image from "./Image";
import { FaTimes } from "react-icons/fa";
import zoomin from "../../assets/images/arrow-up-right-and-arrow-down-left-from-center.png";
import zoomout from "../../assets/images/down-left-and-up-right-to-center.png";

function ImgPopup({ data, setShow }) {
  const [click, setClick] = useState(false);
  
  const zoom = () => {
    const element = document.querySelector("#popup");

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      element.requestFullscreen();
    }

    setClick(!click);
  }
  return (
    <section className="flex items-center justify-center fixed top-0 left-0 z-50 w-full h-full bg-white" id='popup' >
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <button className="" onClick={zoom} >
            {click?<Image src={zoomout} alt="button-zoomout" width="50" height="50" />:<Image src={zoomin} alt="button-zoomin" width="50" height="50" />}
          </button>
          <button className="w-[4rem] h-[4rem]" onClick={() => setShow(false)}>
            <span className="sr-only">close button</span>
            <FaTimes className="text-5xl text-clrDarkGreen font-extralight" />
          </button>
        </div>
        <div className="lg:flex justify-between items-start gap-5 w-full">
          <Image src={data.imgUrl} alt="hero" width="500" height="499" />
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
