import React from "react";
import cotton from "../../assets/Cotton.webp" 
import viscose from "../../assets/Viscose.jpg" 
import tencel from "../../assets/Tencel.webp" 
import Carousel from "../../components/Carousel";

const ShopByFabric = () => {

    const items = [
        {pic:cotton, title: "Cotton"},
        {pic:viscose, title: "Viscose"},
        {pic:tencel, title: "Tencel"}
    ]
  return (
    <section className="pl-4 md:px-6">
      <div className="py-8 md:py-12 ">
        <h1 className="text-center font-Josefin-Slab font-bold text-5xl">
          Shop By Fabric
        </h1>
      </div>

      <Carousel collections={items}/>

      {/* <div className="flex justify-center items-center md:mb-14 mb-10">
        <div className="relative flex justify-start items-center gap-4 md:gap-6 overflow-auto px-2 scroll-smooth">
          <CollectionCard pic={cotton} caption="Cotton" />

          <CollectionCard pic={viscose} caption="Viscose" />
          <CollectionCard pic={tencel} caption="Tencel" />
        </div>
      </div> */}
    </section>
  );
};

export default ShopByFabric;