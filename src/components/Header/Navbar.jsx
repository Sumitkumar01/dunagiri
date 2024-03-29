import React, { useState } from "react";
import Nav_Lists from "./Nav_List";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/asset0.png";
import mobLogo from "../../assets/images/MobileLogo.png";
import { IoCallOutline } from "react-icons/io5";


function Navbar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
    window.document.body.classList.toggle("bg_hidden");
  };
  return (
    <header className="bg-white py-2">
      <nav className="custom_container mx-auto flex justify-around lg:justify-center gap-10">
        <Link
          to="https://wa.me/+919810267719"
          target="_blank"
          className="lg:hidden  flex items-center justify-center "
        >
          <span className="sr-only">call</span>
          <IoCallOutline className="text-4xl text-clrLightGreen" />
        </Link>
        <Link to="/" className="logo-image-containter">
          <img src={logo} alt="logo" className="lg:block hidden" />
          <img src={mobLogo} alt="logo" className="lg:hidden block" />
        </Link>
        <ul className="desktop-ul lg:flex gap-5 hidden">
          {Nav_Lists.map((links, i) => {
            return (
              <li key={i} className="desktop-li">
                <Link to="/" className="capitalize text-base font-normal">
                  {links.linkName}
                </Link>
                {links.subMenu && (
                  <div className="sub_menu">
                    <ul>
                      {links.subMenu.map((sub, i) => {
                        return (
                          <li key={i}>
                            <NavLink to={sub.src} className="top-10">
                              {sub.linkName}
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
        <button className="lg:hidden block" onClick={handleClick}>
          <span className="sr-only">menu</span>
          <FaBars className="text-3xl text-clrDarkGreen font-normal" />
        </button>
      </nav>

      <nav className="">
        <ul
          className="fixed w-[80%] h-[100vh] bg-white px-2 py-5"
          style={{
            top: 0,
            right: open ? "0" : "-100%",
            transition: "all 0.5s",
            zIndex: "99999",
          }}
        >
          <li className="flex justify-end p-4">
          <span className="sr-only">menu</span>
            <FaTimes
              className="text-3xl text-clrDarkGreen font-normal"
              onClick={handleClick}
            />
          </li>
          {Nav_Lists.map((links, i) => {
            return <LiDrop links={links} key={i} handleClick={handleClick}/>;
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

const LiDrop = ({ links,handleClick }) => {
  const [drop, setDrop] = useState(false);

  return (
    <li>
      <Link
        to="/"
        className="uppercase text-2xl font-normal border-0 flex justify-start active:text-clrLightGreen hover:text-clrLightGreen py-5 px-6"
        onClick={handleClick}
      >
        {links.linkName}{" "}
        {links.subMenu && (
          <span
          className="w-5rem"
            onClick={() => {
              setDrop(!drop);
            }}
          >
            {/* <FaCaretDown/> */}
          </span>
        )}
      </Link>
      <div
        style={{
          maxHeight: drop ? "1200px" : "0",
          overflow: "hidden",
          transition: "all 1s linear",
        }}
      >
        <ul>
          {links?.subMenu?.map((sub, i) => {
            return (
              <li key={i}>
                <NavLink to={sub.src} className="top-10 ">
                  {sub.linkName}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
};
