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
import {Helmet} from "react-helmet"
import Section2 from "./Section2";

function homepage() {
  return (
    <>
      <Helmet>
        <title>
          Dunagiri Retreat | Yoga Retreat Near Mahavatar Babaji's Cave
        </title>
        <meta
          name="description"
          content="Dunagiri Retreat, located near Babaji's Cave in the Himalayas – renowned as the birthplace of Yoga – is a holistic institute and boutique hotel focused on yoga, spiritual healing, and wellness."
        />
      </Helmet>
      <header>
        <Banner />
      </header>
      <main>
        <SliderSection1 />
        <ARSoul />
        <Section1 />
        <AreUSection />
        <GuestsExperience clas="lg:block hidden"/>
        <ChoosePathSection clas="lg:block hidden" />
        <Section2/>
        <ForthSection clsname="lg:block hidden"/>
        <FifthSection />
        <ForthSection clsname="lg:hidden  block"/>

        <Section3 />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}

export default homepage;
