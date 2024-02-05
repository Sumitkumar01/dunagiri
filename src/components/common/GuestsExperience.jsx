import React from "react";
function GuestsExperience() {
  return (
    <>
      <section className="py-7 bg-clrDarkGreen">
        <div className="custom_container">
          <div className="">
            <p className="text-clrWhite font-normal uppercase">OUR NUMBERS SPEAK FOR THEMSELVES</p>
            <h2 className="text-clrWhite capitalize font-bold text-4xl">Guests Experience Lasting Benefits</h2>
            <div className="grid grid-cols-3">
              <div className="p-8 text-center">
                <h3 className="text-clrWhite">30%</h3>
                <p className="text-clrWhite">Decrease in anxiety while staying at Dunagiri Retreat.</p>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-clrWhite">26%</h3>
                <p className="text-clrWhite">Improvement in sleep during and post visit.</p>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-clrWhite">16%</h3>
                <p className="text-clrWhite">Improvement in self-compassion after a 5-night stay.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GuestsExperience;
