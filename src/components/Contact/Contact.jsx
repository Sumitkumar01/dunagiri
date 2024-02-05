import React from "react";
// import { IoLocationOutline } from "react-icons/io5";
// import { GoMail } from "react-icons/go";
// import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
// import { LuThumbsUp } from "react-icons/lu";
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";

function Contact() {
  const contactData = [
    // {
    //   data: `Dunagiri Retreat, Village Chari, Near Mahavatar Babaji's Cave, Block, Dwarahat, Uttarakhand 263653 India`,
    //   icon: <IoLocationOutline />,
    //   link: "",
    // },
    {
      data: `+919810267719`,
      // icon: <IoCallOutline />,
      link: "tel:+919810267719",
    },
    {
      data: `delighted@dunagiri.com`,
      // icon: <GoMail />,
      link: "mailto:delighted@dunagiri.com",
    },
  ];
  return (
    <section className="py-5">
      <div className="lg:grid md:grid  lg:grid-cols-3 md:grid-cols-2 custom_container gap-2">
        <div>
          <div>
            <h2
              className="capitalize lg:text-5xl ff-f font-medium"
              id="contact"
            >
              Contact us
            </h2>
          </div>
          <ul>
            {contactData.map((item, i) => (
              <li key={i}>
                <Link to={item.link}>
                  {item.icon} {item.data}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <form>
          <div className="grid grid-cols-2 gap-2 p-1">
            <div className="">
              <div>
                <label htmlFor="f-name" className="capitalize">
                  first name
                </label>
              </div>
              <input
                id="f-name"
                type="text"
                className="w-full border border-2  border-clrDarkGreen text-xl outline-none p-2"
              />
            </div>
            <div className="">
              <div>
                <label htmlFor="l-name" className="capitalize">
                  last name
                </label>
              </div>
              <input
                id="l-name"
                type="text"
                className="w-full border border-2  border-clrDarkGreen text-xl outline-none p-2"
              />
            </div>
            <div className="col-span-2">
              <div>
                <label htmlFor="f-name" className="capitalize">
                  email*
                </label>
              </div>
              <input
                type="text"
                className="w-full border border-2  border-clrDarkGreen text-xl outline-none p-2"
              />
            </div>
            <div className="col-span-2">
              <div>
                <label htmlFor="phone" className="capitalize">
                  phone
                </label>
              </div>
              <input
                id="phone"
                type="text"
                className="w-full border border-2 border-clrDarkGreen  text-xl outline-none p-2"
              />
            </div>
            <div className="col-span-2">
              <div>
                <label htmlFor="" className="capitalize">
                  message
                </label>
              </div>
              <textarea
                name=""
                id="message"
                cols="30"
                rows="3"
                className="w-full border border-2  border-clrDarkGreen text-xl outline-none p-2"
              ></textarea>
            </div>
            <div className="col-start-2 col-end-4 p-1">
              <button className="w-[100%] py-2 bg-clrLightGreen border border-clrLightGreen text-white text-center uppercase hover:bg-clrWhite hover:text-clrLightGreen">
                send
              </button>
            </div>
          </div>
        </form>
        <div>
          <iframe
            title="google map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3461.4281967432426!2d79.44595647554533!3d29.823059675035683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a7547b97e9c3b5%3A0xeed550edee305a4b!2sDunagiri%20Retreat!5e0!3m2!1sen!2sin!4v1707143119714!5m2!1sen!2sin"
            // width={800}
            // height={600}
            style={{ border: 0 }}
            allowFullScreen=""
            // loading="lazy"
            loading="async"
            className="w-full h-full"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
