import React from "react";

const CollectionCard = ({ pic, caption }) => {
  return (
    <div className="aspect-[2/3] w-full h-full scroll-card ">
      <img
        src={pic}
        alt="pic-1"
        className="w-full h-full max-w-[360px] object-cover min-w-[280px]"
      />
      <p className="py-4 font-Josefin-Sans">
        {caption}
      </p>
    </div>
  );
};

export default CollectionCard;
