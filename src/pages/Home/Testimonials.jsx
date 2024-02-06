import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

import img1 from "../../assets/images/img1.avif";
import img2 from "../../assets/images/img2.avif";
import img3 from "../../assets/images/img3.avif";
import img4 from "../../assets/images/img4.avif";
import img5 from "../../assets/images/img5.avif";
import img6 from "../../assets/images/img6.avif";
import img7 from "../../assets/images/img7.avif";
import img8 from "../../assets/images/img8.avif";
import img9 from "../../assets/images/img9.avif";
import img10 from "../../assets/images/img10.avif";
import img11 from "../../assets/images/img11.avif";
import img12 from "../../assets/images/img12.avif";

function Testimonials() {
  const testimonialData = [
    {
      date: "Dec 11,2023",
      time: "2 min",
      url: img1,
      desc: "Finding the Divine: The Mahavatar Babaji Journey",
    },
    {
      date: "Dec 11,2023",
      time: "2 min",
      url: img2,
      desc: "How To Meet Mahavatar Babaji Yogi-Christ of Modern India",
    },
    {
      date: "Dec 11,2023",
      time: "2 min",
      url: img3,
      desc: `How to Reach Mahavatar Babaji's Cave in Kukuchina, Dunagiri,...`,
    },
    {
      date: "Dec 11,2023",
      time: "2 min",
      url: img4,
      desc: `Autobiography of a Yogi: Chapter 34 Babaji's Palace in the...`,
    },
    {
      date: "Dec 11,2023",
      time: "2 min",
      url: img5,
      desc: "Autobiography of Yogi: Chapter 33 Babaji, The Yogi-Christ Of Modern India...",
    },
    {
      date: "Dec 11,2023",
      time: "2 min",
      url: img6,
      desc: "Food at Dunagiri: Ayurveda Vegan Kumaoni Cuisine",
    },
    {
      date: "Dec 11,2023",
      time: "2 min",
      url: img7,
      desc: "What Is Dunagiri Known For?",
    },
    {
      date: "Dec 11,2023",
      time: "2 min",
      url: img8,
      desc: "What Is Kriya Yoga: A Journey of Self-Discovery and Inner Peace",
    },
    {
      date: "Dec 11,2023",
      time: "2 min",
      url: img9,
      desc: `Autobiography of a Yogi's Influence on Steve Jobs`,
    },
    {
      date: "Dec 11,2023",
      time: "2 min",
      url: img10,
      desc: `Mahavatar Babaji: The Eternal Yogi of Dunagiri Retreat`,
    },
    {
      date: "Dec 11,2023",
      time: "2 min",
      url: img11,
      desc: `How to Reach Dunagiri Retreat`,
    },
    {
      date: "Dec 11,2023",
      time: "2 min",
      url: img12,
      desc: `Mahavatar Babaji Cave: A Spiritual Odyssey Near Dunagiri Retreat`,
    },
  ];

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <section className="py-7">
      <div className="custom_container">
        <h2 className="text-3xl text-center font-normal text-clrDarkGreen ff-f capitalize">
          Dunagiri Retreat Blog
        </h2>
        <div>
          <p className="text-xl font-normal ff-l text-justify py-4">
            Dive deep into the history and spiritual significance of Mahavatar
            Babaji's Cave. Our blog explores the revered destination, its
            connection to Kriya Yoga, and the transformative experiences of
            pilgrims. Read more about the nearby attractions and the unique
            journey from Dunagiri Retreat to this sacred site.
          </p>
        </div>
        <div>
          <Swiper
            modules={[Pagination, Autoplay]}
            // pagination={{
            //   type: "custom",
            // }}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {testimonialData.map((item, i) => (
              <SwiperSlide key={i}>
                <div
                  className="bg-no-repeat bg-cover bg-center h-[40vh]"
                  style={{ backgroundImage: `url(${item.url})` }}
                >
                  <div className="flex flex-col items-start justify-between w-full h-full p-6 bg-[rgba(0,0,0,.5)]">
                    <span className="flex text-lg text-clrWhite ff-l font-normal">
                      {item.date} . {item.time}
                    </span>
                    <h3 className="text-2xl font-medium text-clrWhite ff-f">
                      {item.desc}
                    </h3>
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

export default Testimonials;
