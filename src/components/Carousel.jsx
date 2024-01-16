import React from "react";
import CollectionCard from "./CollectionCard";

const Carousel = ({ collections }) => {
  return (
    <div className="flex justify-center items-center md:mb-14 mb-10">
      <div className="relative flex justify-start items-center gap-4 md:gap-6 overflow-auto px-2 scroll-smooth">
        {collections.map((item, index) => (
          <CollectionCard key={index} pic={item.pic} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
