import React from "react";
import Nav_Lists from "./Nav_List";

function Navbar() {
  return (
    <header className="bg-white py-5">
      <nav className="max-w-[1320px] mx-auto flex justify-center gap-10">
        <div className="logo-image-containter">
          {/* <img src="" alt="" /> */}
          <h1>Dunagir</h1>
        </div>
        <ul className="flex gap-5">
          {Nav_Lists.map((links) => {
            return (
              <li>
                <p>{links.linkName}</p>
                {links.subMenu && (
                  <div>
                    <ul>
                      {links.subMenu.map((sub) => {
                        return <li>{sub}</li>;
                      })}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
