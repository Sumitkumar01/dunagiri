import React from "react";
import CpImg1 from "../../assets/images/CpImg1.png";
import CpImg2 from "../../assets/images/sliderimg/GuestMeditating.avif";
import { Link } from "react-router-dom";

function ChoosePathSection({clas}) {
  const cpHeading = "choose your path";
  const cphText =
    "Choose your transformational adventure at your own pace — host a group retreat or come solo.";
  const cpData = [
    {
      img: CpImg1,
      hText: "Guided Workshop & Retreats",
      pText:
        "Our Guided Retreats provide an immersive experience that promotes growth, connection, and transformation. Join like-minded individuals in guided sessions focused on self-discovery and collaborative learning. Led by expert facilitators, these workshops blend structured activities with free time, fostering introspection and skill development. Ideal for those seeking personal growth, these retreats offer a supportive space for learning, ensuring you leave feeling enriched and empowered.",
      btnText: "group retreats",
    },
    {
      img: CpImg2,
      hText: "Self-Guided Explorations",
      pText:
        "Self-Guided Explorations offer a flexible experience for guests to celebrate, grieve, question, or transition at their own pace. It's a supportive, self-directed journey. This period is about honoring personal rhythms and desires, with healing and discovery at the core. The program, set in a beautiful landscape with a supportive community, nourishing meals, and healing practices, aims to rejuvenate and inspire guests, whether they stay for a weekend or week.",
      btnText: "self-guided",
    },
  ];
  return (
    <section className={`bg-clrLightGray lg:py-7 py-3 ${clas}`}>
      <div className="custom_container">
        <div className="py-3">
          <h2 className="ff-f lg:text-[3.125rem] leading-[4.375rem] font-normal text-3xl text-center text-clrDarkGreen">{cpHeading}</h2>
        </div>
        <div className="py-3">
          <p className="text-center ff-op lg:text-xl text-base font-normal">{cphText}</p>
        </div>
        <div className="">
          <div className="grid lg:grid-cols-2 gap-2">
            {cpData.map((item, i) => (
              <div className="flex flex-col gap-5 p-2" key={i}>
                <div className="flex justify-center lg:justify-start px-3">
                  <img src={item.img} className="rounded-full" alt="hero" />
                </div>
                <div className="">
                  <h3 className="ff-f lg:text-[2.938rem] lg:text-start text-center lg:leading-[4.125rem] text-2xl font-normal text-clrDarkGreen px-3">{item.hText}</h3>
                </div>
                <div className="lg:block hidden">
                  <p className="text-justify ff-op  text-base font-normal px-3">{item.pText}</p>
                </div>
                <div className="px-3 text-center lg:text-start">
                  <Link
                    to="#"
                    className="bg-clrLightGreen uppercase text-clrWhite hover:bg-clrWhite hover:text-clrLightGreen border border-clrLightGreen text-center py-2 px-7"
                  >
                    {item.btnText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChoosePathSection;
