import React from 'react';
import videoBg from "../../assets/intro.mp4";
import bgThumbnail from "../../assets/video_bg_thumbnail.webp";
import british from "../../assets/british_heritage.webp";

const Intro = () => {
  return (
    <>
      <div className="hidden md:block w-screen h-screen">
        <video
          playsInline
          className="w-full h-full"
          poster={bgThumbnail}
          autoPlay
          loop
          muted
        >
          <source src={videoBg} type="" />
        </video>
      </div>

      <div className="block md:hidden w-full">
        <img src={british} alt="british-heritage" />

      </div>
    </>
  )
}

export default Intro