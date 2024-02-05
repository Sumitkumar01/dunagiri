import React, { useState } from "react";
import Nav_Lists from "./Nav_List";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../../assets/images/asset0.png'
function Navbar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
    window.document.body.classList.toggle('bg_hidden')
  };
  return (
    <header className="bg-white py-5">
      <nav className="custom_container mx-auto flex justify-center gap-10">
        <Link to="/" className="logo-image-containter">
          <img src={logo} alt="logo" />
          
        </Link>
        <ul className="lg:flex gap-5 hidden">
          {Nav_Lists.map((links,i) => {
            return (
              <li key={i}>
                <Link to="/" className="capitalize text-xl font-normal group">
                  {links.linkName}
                </Link>
                {links.subMenu && (
                  <div className="sub_menu">
                    <ul >
                      {links.subMenu.map((sub,i) => {
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
          {open ? (
            <FaTimes className="text-3xl text-clrDarkGreen font-normal" />
          ) : (
            <FaBars className="text-3xl text-clrDarkGreen font-normal" />
          )}
        </button>
      </nav>
      {open && (
        <nav className="lg:hidden block">
          <ul className="fixed top-[4rem] bg-white w-full">
            {Nav_Lists.map((links,i) => {
              return (
                <li key={i}>
                  <Link
                    to="/"
                    className="capitalize text-xl font-normal border-0"
                  >
                    {links.linkName}
                  </Link>
                  {links.subMenu && (
                    <div>
                      <ul>
                        {links.subMenu.map((sub,i) => {
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
        </nav>
      )}
    </header>
  );
}

export default Navbar;
