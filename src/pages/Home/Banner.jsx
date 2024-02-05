import React from "react";
import bannerImg from "../../assets/images/bannerImg.jpeg";
import { HashLink as Link } from "react-router-hash-link";

function Banner() {
  return (
    <>
      <section
        className="flex items-center justify-center bg-no-repeat bg-center bg-cover h-[60vh]"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="flex items-center flex-col justify-center py-5 bg-[rgba(0,0,0,.2)] w-[min(70%,50rem)] ">
          <h1 className="text-5xl font-normal text-clrWhite capitalize mb-3">
            Dunagiri Yoga & <br/> spiritual retreats
          </h1>
          <p className="text-2xl font-normal text-clrWhite mb-3">Embark on a journey to Mahavatar Babaji's Cave.</p>
          <div className="w-full py-1 ">
            <Link to="#contact" smooth className="bg-clrLightGreen w-max mx-auto text-clrWhite flex items-center justify-center uppercase py-1 px-5 border border-clrLightGreen hover:text-clrLightGreen hover:bg-clrWhite">inquire now</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
