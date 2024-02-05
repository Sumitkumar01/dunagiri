import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ForthSection() {
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
    <section className="ForthSection py-7">
      <div className="custom_container">
        <div className="flex flex-col items-center justify-center py-7">
          <h2 className="text-center ff-f py-4">Guest Experiences</h2>
          <p className="w-[60%]">Explore the heartwarming stories and experiences of individuals who have journeyed with us to Mahavatar Babaji's Cave. Our guests recount transformative experiences, emphasizing the peace, spiritual insights, and serenity they encountered during their stay at Dunagiri Retreat.</p>
        </div>
        <div className="container">
          <Swiper
            loop={true}
            navigation={true}
            pagination={true}
            keyboard={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Pagination, Keyboard, Autoplay]}
            
          >
            {" "}
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="flex w-full justify-around items-center relative">
                  <div className="h-full ">
                    <img
                      src={item.imgurl}
                      className="h-[40rem] rounded-t-full"
                      alt="hero-img"
                    />
                  </div>
                  <div className="bg-white absolute w-[35%] py-8 px-5 bottom-30 right-0">
                    <p className="">{item.experience}</p>
                    <p className="">
                      {item.name},{item.country}
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
