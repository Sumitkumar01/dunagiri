import React from "react";
import { Link } from "react-router-dom";
import Facebook from "../../assets/images/Facebook.png";
import Instagram from "../../assets/images/Instagram.png";
import Twitter from "../../assets/images/Twitter.png";
import Tripadvisor from "../../assets/images/Tripadvisor.gif";
import PayPal from "../../assets/images/PayPal.jpeg";
import Razorpay from "../../assets/images/Razorpay.png";

function Footer() {
  const linkData = [
    { name: "Privacy Pollicy", link: "#" },
    { name: "Cancellation and Refund Policy", link: "#" },
    { name: "Terms and Conditions", link: "#" },
    { name: "FAQs", link: "#" },
    { name: "Contact Us", link: "#" },
  ];

  const socialContact = [
    { url: Facebook, link: "https://www.facebook.com/DunagiriRetreat" },
    { url: Instagram, link: "https://www.instagram.com/dunagiri_retreat" },
    { url: Twitter, link: "https://twitter.com/wix" },
    {
      url: Tripadvisor,
      link: "https://www.tripadvisor.in/Hotel_Review-g27135878-d1927307-Reviews-Dunagiri_Retreat-Chari_Almora_District_Uttarakhand.html",
    },
  ];
  return (
    <section className="footer-section bg-clrDarkGreen py-7">
      <div className="custom_container">
        <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-4">
          <div className="">
            <h2 className="text-white text-lg font-medium ff-p">Contact Us</h2>
            <p className="text-white mb-1 ">
              TEL:{" "}
              <Link to="tel:+919810267719" aria-label="Call us">
                +91 98102 67719
              </Link>
            </p>
            <p className="text-white mb-1 ">
              <Link to="tel:+919690132425" aria-label="Call us">
                +91 96901 32425
              </Link>
            </p>
            <p className="text-white mb-1 ">
              WhatsApp:{" "}
              <Link to="https://wa.me/919810267719" aria-label="WhatsApp">
                +91 98102 67719
              </Link>
            </p>
            <p className="text-white mb-1 ">
              E-MAIL:{" "}
              <Link to="mailto:delighted@dunagiri.com" aria-label="Email us">
                delighted@dunagiri.com
              </Link>
            </p>
          </div>

          <div className="">
            <h3 className="text-white text-lg font-medium ff-p">Address</h3>
            <p className="text-white mb-1 ">
              Village Chari, Near Mahavatar Babaji's Cave, PO Dunagiri,
            </p>
            <p className="text-white mb-1 ">
              Block Dwarahat, District Almora Uttarakhand, India{" "}
            </p>
          </div>
          <div className="flex lg:justify-end w-full">
            <div className="lg:w-[80%]">
              <div className="">
                <h3 className="text-white text-lg font-medium ff-p">Follow Us</h3>
                <ul className="flex gap-4 py-3">
                  {socialContact.map((item, i) => (
                    <li key={i}>
                      <Link
                        to={item.link}
                        className=""
                        target="_blank"
                      >
                        <img src={item.url} alt="log" width={36} height={36} aria-label="logo" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h3 className="text-white text-lg font-medium ff-p">We Accept</h3>
                <div className="flex gap-4 py-3">

                  <img
                    src={PayPal}
                    className=""
                    width={55}
                    height={55}
                    alt="PayPal"
                  />
                  <img
                    src={Razorpay}
                    className=""
                    width={55}
                    height={55}
                    alt="Razorpay"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-3">
          <ul className="lg:flex justify-between">
            {linkData.map((item, i) => (
              <li className="list-none" key={i}>
                <Link to="/" className="text-clrWhite underline text-lg font-medium ff-p">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="py-6">
          <p className="text-center text-white  text-lg font-medium ff-p">© 2023 by DUNAGIRI RETREAT </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
