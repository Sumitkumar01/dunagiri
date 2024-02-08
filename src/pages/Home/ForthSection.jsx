import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// const Swiper = lazy(() => import("swiper/react"));
// const SwiperSlide = lazy(() => import("swiper/react"));
import { Autoplay } from "swiper/modules";
// const Autoplay = lazy(()=>import('swiper/modules'))

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ForthSection({clsname}) {
  const data = [
    {
      name: "Pragata",
      imgurl:
        "https://static.wixstatic.com/media/9c6671_4588634ebfff4608a7d721bfb22a70fa~mv2.jpg/v1/crop/x_1572,y_0,w_2855,h_4000/fill/w_493,h_690,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC_0343_JPG.jpg",
      experience: `"“Everything contributed to the full success of our Qi Gong retreat: the location, the superb rooms, the billions of flowers, the delicious food and all the staff.""`,
      country: "Portugal",
    },
    {
      name: "Miriam",
      imgurl:
        "https://static.wixstatic.com/media/9c6671_3e07df29286c4f3b897ab0f1383cc63f~mv2.jpg/v1/crop/x_1572,y_0,w_2855,h_4000/fill/w_493,h_690,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC_0398_JPG.jpg",
      experience: `“"They say when the gods want to meet they do so in the Himalayas. And I've experienced that...”`,
      country: "Netherlands",
    },
    {
      name: "Mokshananda",
      imgurl:
        "https://static.wixstatic.com/media/9c6671_7f45a7afd42f49128374d5555fca84f3~mv2.jpg/v1/crop/x_72,y_0,w_2855,h_4000/fill/w_493,h_690,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/20230510_174347.jpg",
      experience: `“I traveled to the Himalayas where I can be absorbed in spiritual life...A natural rhythm evolved as relaxation and rejuvenation transpired.”`,
      country: "USA",
    },
  ];

  return (
    <section className={`ForthSection lg:py-7 pt-4 bg-clrLightGray ${clsname}`}>
      <div className="custom_container">
        <div className="flex flex-col items-center justify-center lg:py-7">
          <h2 className="text-center ff-f  lg:text-[3.125rem] leading-[4.475rem] font-normal text-3xl text-clrDarkGreen">
            Guest Experiences
          </h2>
          <p className="font-normal ff-op text-base text-justify mb-4 lg:mb-0 lg:block hidden">
            Explore the heartwarming stories and experiences of individuals who
            have visited us and Mahavatar Babaji's Cave. Our guests recount
            transformative experiences, emphasizing the peace, spiritual
            insights, and serenity they encountered during their stay at
            Dunagiri Retreat.
          </p>
        </div>
        <div className="container">
          <Swiper
            loop={true}
            // pagination={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {" "}
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="flex w-full lg:flex-row  flex-col justify-around items-center lg:relative">
                  <div className="h-full ">
                    <img
                      src={item.imgurl}
                      width={493}
                      height={640}
                      className="rounded-t-full"
                      alt="hero-img"
                    />
                  </div>
                  <div
                    className={`bg-white lg:absolute lg:w-[30%] lg:h[90rem] py-8 px-5 bottom-3 ${
                      i % 2 === 0 ? "right-0" : "left-0"
                    }`}
                  >
                    <p className="lg:text-xl font-medium ff-f mb-3 text-justify" style={{wordSpacing:"-0.110rem"}}>
                      {item.experience}
                    </p>
                    <hr className="w-2rem" />
                    <p className="text-lg ff-f font-normal">
                      {item.name}, {item.country}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default ForthSection;
