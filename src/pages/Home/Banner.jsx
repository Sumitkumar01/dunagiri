import React from "react";
import bannerImg from "../../assets/images/homebanner.avif";
import bgImg from '../../assets/images/asset2.png'
import { HashLink as Link } from "react-router-hash-link";

function Banner() {
  return (
    <>
      <section
        className="flex items-center justify-center bg-no-repeat bg-center bg-cover h-[83vh]"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="flex items-center flex-col justify-center h-[70%] bg-[rgba(0,0,0,.8)] w-[min(90%,60rem)] bg-no-repeat bg-center bg-contain " style={{backgroundImage:`url(${bgImg})`}} >
          <h1 className="lg:text-6xl text-3xl font-normal text-clrWhite text-center capitalize mb-3 ff-f">
          Host Kriya Yoga & Spiritual <br/> Retreats in the Himalayas
          </h1>
          <p className="lg:text-2xl text-base text-center font-normal text-clrWhite mb-3 ff-op">Walk the sacred steps to Mahavatar Babaji's Cave.</p>
          <div className="w-full py-1 ">
            <Link to="#contact" smooth className="bg-clrLightGreen w-max mx-auto text-clrWhite flex items-center justify-center uppercase py-1 px-5 border border-clrLightGreen hover:text-clrLightGreen hover:bg-clrWhite">inquire now</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
