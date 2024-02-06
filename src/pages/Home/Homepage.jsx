import React from "react";
import Banner from "./Banner";
import Contact from "../../components/Contact/Contact";
import SliderSection1 from "./SliderSection1";
import ARSoul from "./ARSoul";
import Section1 from "./Section1";
import AreUSection from "./AreUSection";
import GuestsExperience from "../../components/common/GuestsExperience";
import ChoosePathSection from "./ChoosePathSection";
import ForthSection from "./ForthSection";
import FifthSection from "./FifthSection";
import Section3 from "./Section3";
import Testimonials from "./Testimonials";
// import Section2 from "./Section2";

function homepage() {
  return (
    <>
      <header>
        <Banner />
      </header>
      <main>
        <SliderSection1 />
        <ARSoul/>
        <Section1/>
        <AreUSection/>
        <GuestsExperience/>
        <ChoosePathSection/>
        {/* <Section2/> */}
        <ForthSection/>
        <FifthSection/>
        <Section3/>
        <Testimonials/>
        <Contact />
      </main>
    </>
  );
}

export default homepage;
