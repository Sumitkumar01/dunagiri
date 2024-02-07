import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/asset31.jpeg";
import img1 from "../../assets/images/asset32.webp";
import img2 from "../../assets/images/asset33.jpeg";
function FifthSection() {
  const data = [
    {
      imgUrl: img,
      heading: "Elevated Living.",
      description: `A "playground of well-being" nestled in the heart of the Himalayas, Dunagiri Retreat is devoted entirely to wellbeing. The campus offers a vast array of accommodations, yoga halls, meditation rooms, and experiences, such as hikes, yoga, sound healing, wilderness exploration, and more. `,
    },
    {
      imgUrl: img1,
      heading: "Farm-Fresh Meals.",
      description: `Nourish your body with clean, locally sourced vegan meals developed by our local Chef. Our light and savory meals are included (at no extra charge) with each stay and are specially designed using Ayurvedic principles to support the multi-step detoxification process so you can leave feeling better than ever.`,
    },
    {
      imgUrl: img2,
      heading: "Yoga & Meditation.",
      description: `Retreat leaders and participants get access to our main Yoga Hall, which can host up to 40 people, our Pyramid Meditation Hall, a capacity of 20 people, and Babaji Temple, a capacity of 20 people.`,
    },
  ];

  return (
    <section className="fifth-Section">
      <div className="py-7 bg-clrDarkGreen">
        <div className="custom_container">
          <h2 className="capitalize lg:text-[3.125rem] lg:leading-[4.375rem] text-3xl ff-f  text-clrWhite font-normal text-center py-3">
            Why Choose Us
          </h2>

          <p className="text-clrWhite text-base font-normal text-justify ff-op leading-[1.813rem] lg:block hidden">
            Dunagiri Retreat offers a transformative experience for those
            seeking to deepen their spiritual practice in the majestic
            Himalayas. This revered location has historically been a tapo-bhumi,
            where the land's energy enhances spiritual disciplines, following
            the footsteps of legendary masters like Mahavatar Babaji and Lahiri
            Mahasaya. It's the perfect setting for yoga and meditation retreats,
            providing impeccable hospitality, assistance with travel
            arrangements, and a serene environment for practice. With a focus on
            authentic Indian experiences, Dunagiri Retreat invites yoga
            teachers, healers, and spiritual practitioners to host retreats in a
            place where the essence of India's spiritual heritage is palpable,
            free from the distractions of everyday life.
          </p>
          <p className="text-clrWhite text-base font-normal text-justify ff-op leading-[1.813rem] pt-3 lg:block hidden">
            For more details, please visit the <Link to="/" className="underline">Retreats</Link>{" "}
            page.
          </p>
        </div>
      </div>
      {data.map((item, i) => (
        <div
          key={i}
          className="bg-cover border lg:flex items-end py-10 border-clrDarkGreen bg-current bg-no-repeat lg:h-[90vh] md:h-[60vh] h-max"
          style={{ backgroundImage: `url(${item.imgUrl})` }}
        >
          <div
            className={`custom_container-2 w-full lg:flex justify-${
              i % 2 === 0 ? "end" : "start"
            }`}
          >
            <div className="lg:w-[70%] w-full bg-clrWhite py-8 lg:px-28 md:px-24 px-5 flex flex-col gap-7 ">
              <h3 className="lg:text-[3.125rem] lg:leading-[4.375rem] text-3xl ff-f font-normal text-clrDarkGreen">
                {i + 1}. {item.heading}
              </h3>
              <p className="text-base font-normal ff-op text-justify">
                {item.description}
              </p>
              <div className="hover:border-b-clrLightGreen hover:border-b w-max pe-6">
                <Link
                  to="#"
                  className="text-decoration-none capitalize text-base ff-l font-normal"
                >
                  read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default FifthSection;
