import React from "react";
import { Link } from "react-router-dom";
// import LinkBtn from "../../components/LinkBtn";

function ARSoul() {
  const heading = "A Retreat For Your Soul";
  const arsoulText = [
    {
      text: "Nestled amidst the Dunagiri Mountains in the serene beauty of Uttarakhand, Dunagiri Retreat stands as a beacon for spiritual seekers. Founded in 2005, this eco-spiritual sanctuary is not just a yoga retreat but a profound journey into self-discovery. Revered for its proximity to the legendary Mahavatar Babaji's Cave and the sacred site of Dunagiri Temple, our retreat is a gateway to the transformative teachings of Kriya Yoga as expounded by Mahavatar Babaji and elucidated in Paramahansa Yogananda's 'Autobiography of a Yogi'.",
    },
    {
      text: "At Dunagiri, spirituality and sustainability merge seamlessly. Our eco-friendly accommodations and organic gardens are set against a backdrop of the Himalayan splendor, offering a tranquil space for meditation retreats and a deep connection with nature. Immerse yourself in the spiritual essence of the holy river and the divine energy of Devi temples nearby.",
    },
    {
      text: "Discover the message of Kriya Yoga, walk the sacred steps to Babaji's Cave, and explore the rich heritage of Lahiri Mahasaya and Neem Karoli Baba. Dunagiri Retreat, situated close to Dwarahat town and the charming Kukuchina village, attracts a large number of spiritual seekers annually, all drawn to the promise of peace and self-realization. Join us at Dunagiri Retreat, where every step is a step towards inner peace and spiritual awakening.",
    },
  ];
  return (
    <section className="py-7">
      <div className="custom_container">
      <div className="">
        <h2 className="lg:text-6xl text-3xl ff-f text-center">{heading}</h2>
      </div>
      <div className="mt-3">
        {arsoulText.map((item, i) => (
          <p className="text-lg ff-l font-normal text-justify" key={i}>
            {item.text}
          </p>
        ))}
      </div>
      <div className="w-full text-center mt-5">
        <Link to="/" className="text-sm text-center py-2 px-7 uppercase bg-clrLightGreen text-clrWhite border border-clrLightGreen hover:bg-clrWhite hover:text-clrLightGreen">about us</Link>
      </div>
      </div>
    </section>
  );
}

export default ARSoul;
