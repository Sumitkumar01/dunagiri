import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import image from "../../assets/images/image.webp";
import image1 from '../../assets/images/image.webp'
import image2 from "../../assets/images/image2.webp";
import image3 from "../../assets/images/image3.webp";
import image4 from "../../assets/images/image4.webp";
import image5 from "../../assets/images/image5.webp";
import image6 from "../../assets/images/image6.webp";
import image7 from "../../assets/images/image7.webp";
import image8 from "../../assets/images/image8.webp";

const Section2 = (props) => {
  const imageData = [
    { imgUrl: image1 },
    { imgUrl: image2 },
    { imgUrl: image3 },
    { imgUrl: image4 },
    { imgUrl: image5 },
    { imgUrl: image6 },
    { imgUrl: image7 },
    { imgUrl: image8 },
  ];

  return (
    <>
      <div className="section-wrapper">
        <div className="container second-section-div">
          <h2>Visit Mahavatar Babaji's Cave</h2>
          </div>
          <Swiper
            slidesPerView={5}
            grid={{
              rows: 2,
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
          >
            {imageData.map((data,i) => {
              return (
                <SwiperSlide>
                  {/* <div key={i}>
                    <SectionImage imgUrl={data.imgUrl} />
                  </div> */}
                  <img src={data.imgUrl} alt="" className="img-fluid"></img>
                </SwiperSlide>

              );
            })}
          </Swiper>

          <div className="btn-div">
            <button className="activity-btn">ACTIVITIES</button>
          </div>
      </div>
    </>
  );
};

export default Section2;
