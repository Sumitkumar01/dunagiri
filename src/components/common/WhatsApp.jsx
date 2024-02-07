import React from "react";
import { Link } from "react-router-dom";
import "./chat.css";
import whatsapplink from "../../assets/svg/whatsapp.svg";
function WhatsApp() {
  return (
    <div>
      <Link
        to="https://wa.me/+919810267719"
        target="_blank"
        className="whats-app lg:hidden flex"
      >
        <span className="sr-only">What's app</span>
        <img src={whatsapplink} alt="" />
      </Link>
    </div>
  );
}

export default WhatsApp;
