import React from "react";
import WowImageAreYou from "../../assets/images/WowImageAreYou.png";
import AreUWowImage1 from "../../assets/images/AreUWowImage1.png";
import AreUWowImage2 from "../../assets/images/AreUWowImage2.png";
import AreUWowImage3 from "../../assets/images/AreUWowImage3.png";
import AreUWowImage4 from "../../assets/images/AreUWowImage4.png";
import AreUWowImage5 from "../../assets/images/AreUWowImage5.png";
import AreUWowImage6 from "../../assets/images/AreUWowImage6.png";

function AreUSection() {
  const pheadingText = "No matter your motivation, we can help";
  const headingText = "Are you..";
  const data = [
    {
      png: AreUWowImage1,
      gridHeadingText: "Searching for something greater in life?",
      gridPText:
        "Immerse yourself in a period of reflection and self-discovery to uncover your desires and purpose.",
    },
    {
      png: AreUWowImage2,
      gridHeadingText: "In need of a mind-body reset?",
      gridPText:
        "Discover an approach to wellness tailored to your unique constitution that gives your mind and body what it needs to thrive.",
    },
    {
      png: AreUWowImage3,
      gridHeadingText: "Experiencing a life transition?",
      gridPText:
        "Gain tools to move through periods of unease with purpose and clarity.",
    },
    {
      png: AreUWowImage4,
      gridHeadingText: "Looking for a spiritual awakening?",
      gridPText:
        "Experience profound shifts as you reconnect to the divine through daily meditation and yoga practices.",
    },
    {
      png: AreUWowImage5,
      gridHeadingText: "Ready to refill your cup?",
      gridPText:
        "Step away from that to-do list to nourish and replenish yourself in a lasting way.",
    },
    {
      png: AreUWowImage6,
      gridHeadingText: "Wanting to live a healthier, happier life?",
      gridPText:
        "Uncover Kriya Yoga's secrets to thriving wellbeing and awaken the eternal source of joy within.",
    },
  ];
  return (
    <section className="py-7">
      <div className="custom_container">
        <div className="lg:grid lg:grid-cols-3 gap-4">
          <div className="w-full">
            <img
              src={WowImageAreYou}
              className="w-full h-full"
              alt="WowImageAreYou"
            />
          </div>
          <div className="col-span-2">
            <div className="py-3">
              <p className="uppercase ff-l font-light text-3xl">
                {pheadingText}
              </p>
            </div>
            <div className="py-3">
              <h2 className="lg:text-5xl text-3xl font-medium text-clrLightGreen ff-f">
                {headingText}
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-3 py-2">
              {data.map((item, i) => (
                <div className="flex flex-col gap-3" key={i}>
                  <div className="">
                    <img src={item.png} alt="" />
                  </div>
                  <div className="">
                    <p className="ff-f text-2xl ">{item.gridHeadingText}</p>
                  </div>
                  <div className="">
                    <p className="ff-l text-xl font-light text-justify">{item.gridPText}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AreUSection;
