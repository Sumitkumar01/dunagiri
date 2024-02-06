import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import featurelogo from "../../assets/images/cnntravel.webp";
import featurelogo1 from "../../assets/images/Outlook.png";
import featurelogo2 from "../../assets/images/pngwingcom.png";
import { Link } from "react-router-dom";

function SliderSection1(props) {
  const featureCardData = [
    {
      imgUrl: featurelogo,
      heading:
        '"(Dunagiri Retreat) A place of warmth, bliss, solitude, and delicious food!"',
      link: "",
      linkText: "Ri, Tripadvisor",
    },
    {
      imgUrl: featurelogo1,
      heading:
        '"Time and global warming notwithstanding, the stories frame Dunagiri, a place lush with natural and mythological lore."',
      link: "",
      linkText: "Disha, Outlook Traveller",
    },
    {
      imgUrl: featurelogo2,
      heading:
        '"Glittering peaks and vivid landscapes create an environment that can calm the most unsettled of hearts."',
      link: "",
      linkText: "Jini Reddy, CNN Travel",
    },
  ];
  return (
    <section className="lg:py-7">
      <div className="custom_container">
        <div className="">
          <h2 className="lg:text-6xl font-normal text-3xl text-center ff-f py-5">
            As Featured In
          </h2>
          <div>
            <Swiper
              loop={true}
              pagination={true}
              slidesPerView={1}
              spaceBetween={10}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
            >
              {featureCardData.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="h-[37vh] flex flex-col gap-3 justify-center items-center">
                    <img src={item.imgUrl} alt="logo" className="text-center"/>
                    <h3 className="lg:text-5xl text-2xl text-center ff-f font-normal">{item.heading}</h3>
                    <Link to={item.link} className="lg:text-4xl text-xl text-center ff-f font-normal underline">{item.linkText}</Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SliderSection1;
