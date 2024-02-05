import React from "react";

const Section1 = () => {
  return (
    <>
      <div className="py-7 bg-clrLightGreen">
        <div className="custom_container">
          <div className="grid grid-cols-3 gap-3">
            <div className="">
              <h2> Reconnect with your mind and body.</h2>
            </div>
            <div className="col-span-2">
              <p>
                “Keep close to Nature's heart...and break clear away, once in a
                while, and climb a mountain or spend a week in the woods. Wash
                your spirit clean.”
              </p>
              <hr className="break-line" />
              <span>John Muir</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
