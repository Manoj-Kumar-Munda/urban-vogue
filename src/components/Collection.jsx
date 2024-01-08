import React from "react";
import pic2 from "../assets/IMAGE-1.webp";
import pic1 from "../assets/IMAGE-2.webp";
import pic3 from "../assets/IMAGE-3.webp";
import pic4 from "../assets/IMAGE-4.webp";
import pic5 from "../assets/IMAGE-5.webp";
import pic6 from "../assets/IMAGE-6.webp";
import CollectionCard from "./CollectionCard";

const Collection = () => {
  return (
    <section className="px-4 md:px-6">
      <div className="py-8 md:py-12 ">
        <h1 className="text-center font-Josefin-Slab font-bold text-5xl">
          Other Collections
        </h1>
      </div>

      <div className="flex justify-center items-center md:mb-14 mb-10">
        <div className="relative flex justify-start items-center gap-6 overflow-auto px-2 scroll-smooth">
          <CollectionCard pic={pic1} caption="Whims & Fancies" />
          <CollectionCard pic={pic3} caption="Wild Romance" />
          <CollectionCard pic={pic2} caption="Cityscape" />
        </div>
      </div>

      <div className="flex justify-center items-center md:mb-14 mb-10">
        <div className="relative flex justify-start items-center gap-6 overflow-auto px-2 scroll-smooth">
          <CollectionCard pic={pic4} caption="Newtro Twist" />
          <CollectionCard pic={pic5} caption="#IDGAF" />
          <CollectionCard pic={pic6} caption="Born To Shine" />
        </div>
      </div>
    </section>
  );
};

export default Collection;
