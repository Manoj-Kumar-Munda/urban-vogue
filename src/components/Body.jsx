import React from 'react';
import bgVideo from '../assets/bg-video.mp4';
import bgMobile from "../assets/top_banner.webp";
import bgThumbnail from "../assets/main-bg-thumbnail.webp"
import '../styles/mainPage.css';

const Body = () => {
  return (
    <div className="w-screen h-screen relative overflow-hidden ">
      <video
        className="w-full h-full hidden md:block"
        poster={bgThumbnail}
        autoPlay
        loop
        muted
      >
        <source src={bgVideo} />
      </video>
      <div className="absolute inset-0 md:hidden">
        <img
          src={bgMobile}
          alt={"bg-mobile-banner"}
          className="object-cover object-center w-full "
        />
      </div>

      <div className="hidden  absolute bottom-32 left-0 right-0 md:flex flex-col items-center">
        <h1 className="text-white font-Josefin-Sans font-bold text-7xl leading-normal">
          The Veronicas
        </h1>
        <h3 className="hover:cursor-pointer font-Josefin-Slab text-white underline underlin underline-offset-2">
          + EXPLORE THE COLLECTIONS
        </h3>
      </div>
    </div>
  );
}

export default Body