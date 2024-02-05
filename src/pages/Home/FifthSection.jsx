import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/asset31.jpeg";
import img1 from "../../assets/images/asset32.webp";
import img2 from "../../assets/images/asset33.jpeg";
function FifthSection() {
  const data = [
    {
      imgUrl: img,
      heading: "Elevated Living",
      description: `A "playground of well-being" nestled in the heart of the Himalayas, Dunagiri Retreat is devoted entirely to wellbeing. The campus offers a vast array of accommodations, yoga halls, meditation rooms, and experiences, such as hikes, yoga, sound healing, wilderness exploration, and more. `,
    },
    {
      imgUrl: img1,
      heading: "Farm-Fresh Meals",
      description: `Nourish your body with clean, locally sourced vegan meals developed by our local Chef. Our light and savory meals are included (at no extra charge) with each stay and are specially designed using Ayurvedic principles to support the multi-step detoxification process so you can leave feeling better than ever.`,
    },
    {
      imgUrl: img2,
      heading: "Yoga & Meditation",
      description: `Retreat leaders and participants get access to our main Yoga Hall, which can host up to 40 people, our Pyramid Meditation Hall, a capacity of 20 people, and Babaji Temple, a capacity of 20 people.`,
    },
  ];

  return (
    <section className="fifth-Section">
      <div className="py-7 bg-clrDarkGreen">
        <div className="custom_container">
          <h2 className="capitalize text-5xl text-clrWhite font-semibold text-center py-6">
            Why Choose Us
          </h2>

          <p className="text-clrWhite text-lg font-normal text-justify">
            Why Choose Us Dunagiri Retreat offers a transformative experience
            for those seeking to deepen their spiritual practice in the majestic
            Himalayas. This revered location has historically been a tapo-bhumi,
            where the land's energy enhances spiritual disciplines, following
            the footsteps of legendary masters like Mahavatar Babaji and Lahiri
            Mahasaya. It's the perfect setting for yoga and meditation retreats,
            providing impeccable hospitality, assistance with travel
            arrangements, and a serene environment for practice. With a focus on
            authentic Indian experiences, Dunagiri Retreat invites yoga
            teachers, healers, and spiritual practitioners to host retreats in a
            place where the essence of India's spiritual heritage is palpable,
            free from the distractions of everyday life. For more details,
            please visit the <Link to="/">Retreats</Link> page.
          </p>
        </div>
      </div>
      {data.map((item, i) => (
        <div
          key={i}
          className="bg-cover border flex items-end py-10 border-clrDarkGreen bg-current bg-no-repeat h-[70vh]"
          style={{ backgroundImage: `url(${item.imgUrl})` }}
        >
          <div
            className={`custom_container flex justify-${
              i % 2 == 0 ? "start" : "end"
            }`}
          >
            <div className="w-[70%] bg-clrWhite py-8 px-28 flex flex-col gap-7">
              <h3 className="text-3xl font-normal text-clrDarkGreen">
                {i + 1}. {item.heading}
              </h3>
              <p className="text-lg">{item.description}</p>
              <div className="hover:border-b-clrLightGreen hover:border-b w-max pe-6">
                <Link
                  to="#"
                  className="text-decoration-none capitalize text-base"
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