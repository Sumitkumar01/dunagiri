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
        <div className="py-4">
          <p className="text-xl ff-l font-normal text-clrWhite py-4 text-justify">
            For more information or to plan your visit to{" "}
            <strong className="font-bold">Mahavatar Babaji's Cave</strong>, please contact us via
            Whatsapp at{" "}
            <Link to="https://wa.me/9810267719" target="_blank">
              09810267719
            </Link>
            .
          </p>
          <p className="text-xl ff-l font-normal text-clrWhite text-justify">
            Embrace a transformative experience, attend a yoga retreat, or find
            your escape in the heart of the Himalayas at{" "}
            <strong className="font-bold">Dunagiri Retreat</strong>.
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-4">
          <div className="">
            <h2 className="text-white text-xl font-semibold ff-l">Contact Us</h2>
            <p className="text-white mb-1 ">
              TEL:{" "}
              <Link
                to="tel:+919810267719"
                className="text-base ff-l font-normal"
                aria-label="Call us"
              >
                +91 98102 67719
              </Link>
            </p>
            <p className="text-white mb-1 ">
              <Link
                to="tel:+919690132425"
                className="text-base ff-l font-normal"
                aria-label="Call us"
              >
                +91 96901 32425
              </Link>
            </p>
            <p className="text-white mb-1 ">
              WhatsApp:{" "}
              <Link
                to="https://wa.me/919810267719"
                className="text-base ff-l font-normal"
                aria-label="WhatsApp"
              >
                +91 98102 67719
              </Link>
            </p>
            <p className="text-white mb-1 ">
              E-MAIL:{" "}
              <Link
                to="mailto:delighted@dunagiri.com"
                className="text-base ff-l font-normal"
                aria-label="Email us"
              >
                delighted@dunagiri.com
              </Link>
            </p>
          </div>

          <div className="">
            <h3 className="text-white text-xl font-semibold ff-l">Address</h3>
            <p className="text-white mb-1 text-base ff-l font-normal">
              Village Chari, Near Mahavatar Babaji's Cave, PO Dunagiri,
            </p>
            <p className="text-white mb-1 text-base ff-l font-normal">
              Block Dwarahat, District Almora Uttarakhand, India{" "}
            </p>
          </div>
          <div className="flex lg:justify-end w-full">
            <div className="lg:w-[80%]">
              <div className="">
                <h3 className="text-white text-lg font-semibold ff-p">
                  Follow Us
                </h3>
                <ul className="flex gap-4 py-3">
                  {socialContact.map((item, i) => (
                    <li key={i}>
                      <Link to={item.link} className="" target="_blank">
                        <img
                          src={item.url}
                          alt="log"
                          width={36}
                          height={36}
                          aria-label="logo"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h3 className="text-white text-lg font-semibold ff-p">
                  We Accept
                </h3>
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
                <Link
                  to="/"
                  className="text-clrWhite underline text-xl font-medium ff-l"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-6">
          <p className="text-center text-white  text-lg font-medium ff-p">
            © 2023 by DUNAGIRI RETREAT{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
