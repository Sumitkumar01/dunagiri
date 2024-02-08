import React from "react";
import bannerImg from "../../assets/images/homebanner.avif";
import bgImg from "../../assets/images/asset2webp.webp";
import { HashLink as Link } from "react-router-hash-link";

function Banner() {
  return (
    <>
      <section
        className="flex items-center justify-center bg-no-repeat bg-center bg-cover h-[86vh]"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div
          className="bg-no-repeat bg-center bg-contain w-[min(90%,60rem)] homebanner-h"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="flex items-center flex-col justify-center gap-4 h-full  bg-[rgba(0,0,0,.6)] ">
            <h1 className="lg:text-6xl text-2xl font-normal text-clrWhite text-center capitalize mb-3 ff-f">
              Host Kriya Yoga & Spiritual <br /> Retreats in the Himalayas
            </h1>
            <p className="lg:text-2xl text-base text-center font-normal text-clrWhite mb-3 ff-op">
              Walk the sacred steps to Mahavatar Babaji's Cave.
            </p>
            <div className="w-full py-1 ">
              <Link
                to="#contact"
                smooth
                className="bg-clrLightGreen w-max mx-auto text-clrWhite flex items-center justify-center uppercase py-2 px-10 border border-clrLightGreen hover:text-clrLightGreen hover:bg-clrWhite"
              >
                inquire now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
