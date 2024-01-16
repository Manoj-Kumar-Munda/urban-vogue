import React from "react";
import safari from "../../assets/Virgo.mp4";

const Safari = () => {
  return (
    <div className="hidden md:block relative w-screen h-screen overflow-hidden">
      <video className="w-full  hidden md:block" autoPlay muted loop>
        <source src={safari} type="" />
      </video>
    </div>
  );
};

export default Safari;
