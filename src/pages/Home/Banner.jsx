import React from "react";
import bannerImg from "../../assets/images/bannerImg.jpeg";

function Banner() {
  return (
    <>
      <section
        className="flex items-center justify-center bg-no-repeat bg-center bg-cover h-[60vh]"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="flex items-center flex-col justify-center bg-[0,0,0] w-[min(70%,500px)] ">
          <h1 className="text-5xl font-normal text-clrWhite capitalize">
            Dunagiri Yoga & spiritual retreats
          </h1>
          <p className="text-2xl font-normal text-clrWhite">Embark on a journey to Mahavatar Babaji's Cave.</p>
        </div>
      </section>
    </>
  );
}

export default Banner;
