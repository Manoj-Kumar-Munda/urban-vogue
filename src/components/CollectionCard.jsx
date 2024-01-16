import React from "react";

const CollectionCard = ({ pic, title }) => {
  return (
    <div className="aspect-[2/3] w-full h-full scroll-card min-w-[190px] ">
      <img
        src={pic}
        alt="pic-1"
        className="w-full h-full max-w-[360px] object-cover "
      />
      <p className="py-4 font-Josefin-Sans text-sm md:text-base">
        {title}
      </p>
    </div>
  );
};

export default CollectionCard;
