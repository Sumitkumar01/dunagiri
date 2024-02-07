import React from "react";
import founderImg from "../../assets/images/founderimg.avif";
import { Link } from "react-router-dom";

import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Section3 = () => {
  const socialContact = [
    { title: "Facebook", icon: <FaFacebook />, link: "" },
    { title: "InstagramSquare", icon: <FaInstagramSquare />, link: "" },
    { title: "Linkedin", icon: <FaLinkedin />, link: "" },
  ];

  return (
    <>
      <section className="py-7 bg-clrLightGray">
        <div className="custom_container-3 bg-clrWhite">
          <div className="lg:grid lg:grid-cols-5 gap-4">
            <div className="col-span-3 lg:px-14">
              <div className="flex flex-col gap-4 justify-center h-full">
                <h2 className="lg:text-[3.125rem] lg:leading-[4.375rem] text-3xl font-normal ff-f text-clrDarkGreen">
                  Meet Our Founder <br />
                  Piyush Kumar
                </h2>
                <p className="text-base font-normal ff-op text-justify">
                  Guided by the philosophy that love transcends monetary value,
                  Piyush Kumar, a former World Bank professional, established
                  Dunagiri Retreat in 2005. His vision was to create a retreat
                  that harmonizes with nature and nurtures the local community,
                  fostering a unique synergy between guests and villagers under
                  the retreat's guiding principles.
                </p>
                <p className="text-base font-normal ff-op text-justify">
                  Dunagiri Retreat is your invitation to experiencing the sacred
                  Mahavatar Babaji's Cave, nestled in the serene Himalayas. A
                  beacon of spiritual awakening and the birthplace of Kriya
                  Yoga, this mystical site offers a transformative experience.
                  Embark your journey to a spiritual awakening.
                </p>
                <ul className="flex gap-4 lg:justify-start justify-center">
                  {socialContact.map((item, i) => (
                    <li key={i}>
                      <Link to={item.link} className="text-3xl ">
                        <span className="sr-only">{item.title}</span>
                        {item.icon}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="my-4 w-full text-center lg:text-start">
                  <Link
                    to="/"
                    className="text-clrWhite text-sm bg-clrLightGreen hover:text-clrLightGreen hover:bg-clrWhite border-clrLightGreen border text-center py-2 px-10 uppercase"
                  >
                    about us
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-2 ">
              <img
                src={founderImg}
                alt="founder-Img"
                width={465}
                height={542}
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;
