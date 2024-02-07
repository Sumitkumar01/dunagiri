import React from "react";
function GuestsExperience({clas}) {

  const data =[
    {number:"30%",desc:"Decrease in anxiety while staying at Dunagiri Retreat."},
    {number:"26%",desc:"Improvement in sleep during and post visit."},
    {number:"16%",desc:"Improvement in self-compassion after a 5-night stay."},
  ]
  return (
    <>
      <section className={`py-7 bg-clrDarkGreen ${clas}`}>
        <div className="custom_container">
          <div className="">
            <p className="text-clrWhite font-normal uppercase ff-l text-lg leading-[2rem]">OUR NUMBERS SPEAK FOR THEMSELVES</p>
            <h2 className="text-clrWhite capitalize font-normal lg:text-[3.125rem] lg:leading-[4.375rem] text-3xl ff-f">Guests Experience Lasting Benefits</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-3">
              {data.map((item,i)=>(
                <div className="p-8 text-center" key={i}>
                <h3 className="text-clrWhite capitalize font-normal lg:text-[5rem] lg:leading-[7rem] text-3xl ff-f">{item.number}</h3>
                <p className="text-clrWhite text-base ff-op font-normal">{item.desc}</p>
              </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GuestsExperience;
