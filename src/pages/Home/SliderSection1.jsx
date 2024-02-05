import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import featurelogo from "../../assets/images/logo-cnntravel.webp";
import featurelogo1 from "../../assets/images/307_Outlook_Traveller_edited.png";
import featurelogo2 from "../../assets/images/pngwing_com.png";
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
    <section className="py-6">
      <div className="custom_container">
        <div className="flex items-center justify-center flex-col">
          <h2>As Featured In</h2>
          <Swiper
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
          >
            {featureCardData.map((data, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="w-full">
                    <div className="flex flex-col justify-center items-center h-52">
                      <div>
                        <img src={data.imgUrl} alt="logo" />
                      </div>
                      <div>
                        <h3>{data.heading}</h3>
                      </div>
                      <div>
                        <Link to={data.link} className="">
                          {data.linkText}
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default SliderSection1;
