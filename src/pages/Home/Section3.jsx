import React from "react";
import founderImg from "../../assets/images/founderimg.webp";
import { Link } from "react-router-dom";
const Section3 = () => {
  return (
    <>
      <section className="py-7 bg-clrLightGraygh">
        <div className="custom_container">
          <div className="grid grid-cols-5 gap-3">
            <div className="col-span-3 ">
             <div className="flex flex-col gap-4 justify-center h-full">
             <h2>
                Meet Our Founder <br />
                Piyush Kumar
              </h2>
              <p>
                Guided by the philosophy that love transcends monetary value,
                Piyush Kumar, a former World Bank professional, established
                Dunagiri Retreat in 2005. His vision was to create a retreat
                that harmonizes with nature and nurtures the local community,
                fostering a unique synergy between guests and villagers under
                the retreat's guiding principles.
              </p>
              <div className="social-icons">
                <Link className="social-link">
                  <i className="fa-brands fa-linkedin-in"></i>
                </Link>
                <Link className="social-link">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link className="social-link">
                  <i className="fa-brands fa-facebook"></i>
                </Link>
              </div>
              <div className="my-4">
                <Link to="/" className="text-clrWhite bg-clrLightGreen hover:text-clrLightGreen hover:bg-clrWhite border-clrLightGreen border text-center py-2 px-5 uppercase">about us</Link>
              </div>
             </div>
            </div>
            <div className="col-span-2">
              <img src={founderImg} alt="founder-Img" className="h-[40rem] w-[40rem]"  />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;
