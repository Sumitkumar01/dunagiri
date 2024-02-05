import React from "react";
import founderImg from "../../assets/images/founderimg.webp";
import { Link } from "react-router-dom";
const Section3 = () => {
  return (
    <>
      <section className="py-7 bg-clrLightGray">
        <div className="custom_container bg-clrWhite">
          <div className="lg:grid lg:grid-cols-5 gap-4">
            <div className="col-span-3 ">
             <div className="flex flex-col gap-4 justify-center h-full">
             <h2 className="lg:text-6xl text-3xl font-semibold ff-f text-clrDarkGreen">
                Meet Our Founder <br />
                Piyush Kumar
              </h2>
              <p className="text-xl font-normal ff-l text-justify">
                Guided by the philosophy that love transcends monetary value,
                Piyush Kumar, a former World Bank professional, established
                Dunagiri Retreat in 2005. His vision was to create a retreat
                that harmonizes with nature and nurtures the local community,
                fostering a unique synergy between guests and villagers under
                the retreat's guiding principles.
              </p>
              <p className="text-xl font-normal ff-l text-justify">Dunagiri Retreat is your invitation to experiencing the sacred Mahavatar Babaji's Cave, nestled in the serene Himalayas. A beacon of spiritual awakening and the birthplace of Kriya Yoga, this mystical site offers a transformative experience. Embark your journey to a spiritual awakening.</p>
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
              <div className="my-4 w-full">
                <Link to="/" className="text-clrWhite bg-clrLightGreen hover:text-clrLightGreen hover:bg-clrWhite border-clrLightGreen border text-center py-2 px-5 uppercase">about us</Link>
              </div>
             </div>
            </div>
            <div className="col-span-2">
              <img src={founderImg} alt="founder-Img" className="h-[40rem] w-full"  />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;
