import React from "react";
import { Link } from "react-router-dom";


const Section1 = () => {
  return (
    <>
      <div className="py-10 bg-clrDarkGreen">
        <div className="custom_container">
          <div className="lg:grid grid-cols-5 gap-3">
            <div className="col-span-2">
              <h2 className="lg:text-5xl text-2xl font-normal text-clrWhite mb-3 ff-f "> Reconnect with your mind and body.</h2>
            </div>
            <div className="col-start-3 col-end-6 p-2">
              <p className="lg:text-2xl text-xl text-white font-normal ff-l text-justify mb-5">
                “Keep close to Nature's heart...and break clear away, once in a
                while, and climb a mountain or spend a week in the woods. Wash
                your spirit clean.”
              </p>
              <hr className="w-[5rem] py-5"/>
              <Link to='/' className="lg:text-4xl text-2xl font-medium ff-l text-white">John Muir</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
