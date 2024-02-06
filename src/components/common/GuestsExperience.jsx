import React from "react";
function GuestsExperience() {
  return (
    <>
      <section className="py-7 bg-clrDarkGreen">
        <div className="custom_container">
          <div className="">
            <p className="text-clrWhite font-normal uppercase ff-l text-lg">OUR NUMBERS SPEAK FOR THEMSELVES</p>
            <h2 className="text-clrWhite capitalize font-semibold lg:text-5xl text-3xl ff-f">Guests Experience Lasting Benefits</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-3">
              <div className="p-8 text-center">
                <h3 className="text-clrWhite capitalize font-semibold lg:text-5xl text-3xl ff-f">30%</h3>
                <p className="text-clrWhite text-lg ff-l font-normal">Decrease in anxiety while staying at Dunagiri Retreat.</p>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-clrWhite capitalize font-semibold lg:text-5xl text-3xl ff-f">26%</h3>
                <p className="text-clrWhite text-lg ff-l font-normal">Improvement in sleep during and post visit.</p>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-clrWhite capitalize font-semibold lg:text-5xl text-3xl ff-f">16%</h3>
                <p className="text-clrWhite text-lg ff-l font-normal">Improvement in self-compassion after a 5-night stay.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GuestsExperience;
