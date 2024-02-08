import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Autoplay, Thumbs, FreeMode } from "swiper/modules";

import img1 from "../../assets/images/sliderimg/asset13.avif";
import img2 from "../../assets/images/sliderimg/Babaji.avif";
import img3 from "../../assets/images/sliderimg/Babaji-temple.avif";
import img4 from "../../assets/images/sliderimg/asset16.avif";
import img5 from "../../assets/images/sliderimg/GuestsatDunagiri.avif";
import img6 from "../../assets/images/sliderimg/GuestMeditating.avif";
import img7 from "../../assets/images/sliderimg/GuestMeditating2.avif";
import img8 from "../../assets/images/sliderimg/LandscapeView.avif";
import img9 from "../../assets/images/sliderimg/DiningHall.avif";
import img10 from "../../assets/images/sliderimg/asset18.avif";
import img11 from "../../assets/images/sliderimg/GuestsatDunagiriRetreat.avif";
import img12 from "../../assets/images/sliderimg/room.webp";
import img13 from "../../assets/images/sliderimg/ExcursionatDunagiriRetreat.avif";
import img14 from "../../assets/images/sliderimg/RetreatsatDunagiri.avif";
import img15 from "../../assets/images/sliderimg/MahavatarBabaji.webp";
import img16 from "../../assets/images/sliderimg/TrishulMountainPeaks.webp";
import ImgPopup from "../../components/common/ImgPopup";

const Section2 = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const imageData = [
    // { imgUrl: image1 },
    { imgUrl: img1, desc: "", title: "" },
    { imgUrl: img2, desc: "", title: "On the way to Mahavatar Babaji's Cave" },
    { imgUrl: img3, desc: "", title: "Mahavatar Babaji's Temple" },
    { imgUrl: img4, desc: "", title: "" },
    { imgUrl: img5, desc: "", title: "Guests at Dunagiri Retreat" },
    { imgUrl: img6, desc: "", title: "Guest Meditating" },
    { imgUrl: img7, desc: "", title: "Guest Meditating" },
    { imgUrl: img8, desc: "", title: "Landscape View from Dunagiri" },
    { imgUrl: img9, desc: "", title: "Dining Hall" },
    { imgUrl: img10, desc: "", title: "Ayodhya Main Building & Front Desk" },
    {
      imgUrl: img11,
      desc: "Guests at Mahavatar Babaji Cave",
      title: "Guests at Mahavatar Babaji's Cave",
    },
    { imgUrl: img12, desc: "", title: "Guests at Dunagiri Retreat" },
    { imgUrl: img13, desc: "", title: "Excursion at Dunagiri Retreat" },
    { imgUrl: img14, desc: "", title: "Retreats at Dunagiri" },
    { imgUrl: img15, desc: "", title: "Mahavatar Babaji" },
    { imgUrl: img16, desc: "", title: "Trishul Mountain Peaks" },
  ];

  return (
    <>
      <section className="py-7">
        <div className="custom_container">
          <div className="py-4">
            <h2 className="lg:text-[3.125rem] lg:leading-[4.375rem] text-2xl ff-f font-normal text-clrDarkGreen text-center">
              Visit Mahavatar Babaji's Cave
            </h2>
          </div>
          <div className="py-4 lg:block hidden">
            <p className="text-base ff-op font-normal text-justify">
              Discover the spiritual wonder of Mahavatar Babaji's Cave, a serene
              place in the Himalayas. Known as the birthplace of Kriya Yoga,
              this cave is a must-visit for those interested in learning about
              the history of yoga. Just 25 km from Dwarahat and 2 kilometers
              from Dunagiri Retreat, the cave is easily accessible and perfect
              for meditation. Whether you are a yoga enthusiast or looking for
              peace, Babaji's Cave offers a unique experience. Learn about
              Mahavatar Babaji's teachings and feel the history of this sacred
              place.
            </p>
          </div>

          <Swiper
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Thumbs, Autoplay]}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={10}
            // navigation={true}
            // style={{
            //   "--swiper-navigation-color": "#fff",
            //   "--swiper-pagination-color": "#fff",
            // }}
            className="mySwiper"
          >
            {imageData.map((item, i) => (
              <SwiperSlide key={i}>
                <div
                  className="overflow-hidden"
                  onClick={() => {
                    setShow(true);
                    setData(item);
                  }}
                >
                  <div
                    className="bg-no-repeat cust_cover  bg-center h-[40vh] w-full hover:scale-110 duration-300"
                    style={{ backgroundImage: `url(${item.imgUrl})`,backgroundAttachment:'fixed' }}
                  >
                    <div className="group flex flex-col items-center justify-end w-full h-full p-6 hover:bg-[rgba(0,0,0,.5)] ">
                      <h3 className="text-2xl font-medium text-clrWhite ff-f group-hover:block hidden">
                        {item.title}
                      </h3>
                      <p className="text-lg font-medium text-clrWhite ff-f group-hover:block hidden">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            onSwiper={setThumbsSwiper}
            breakpoints={{
              // 640: {
              //   slidesPerView: 2,
              //   spaceBetween: 10,
              // },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            spaceBetween={10}
            slidesPerView={2}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className="mySwiper my-2"
          >
            {imageData.map((item, i) => (
              <SwiperSlide key={i}>
                <div
                  className="overflow-hidden"
                  // onClick={() => {
                  //   setShow(true);
                  //   setData(item);
                  // }}
                >
                  <div
                    className="bg-no-repeat bg-cover bg-center h-[30vh] w-full hover:scale-110 duration-300"
                    style={{ backgroundImage: `url(${item.imgUrl})` }}
                  >
                    <div className="group flex flex-col items-center justify-end w-full h-full p-6 hover:bg-[rgba(0,0,0,.5)] ">
                      <h3 className="text-2xl font-medium text-clrWhite ff-f group-hover:block hidden">
                        {item.title}
                      </h3>
                      <p className="text-lg font-medium text-clrWhite ff-f group-hover:block hidden">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {show && <ImgPopup data={data} setShow={setShow} />}
          <div className="text-center py-6">
            <Link
              to="/"
              className="py-2 px-9 text-sm font-normal ff-f bg-clrLightGreen text-clrWhite hover:bg-clrWhite hover:text-clrLightGreen border border-clrLightGreen "
            >
              ACTIVITIES
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
