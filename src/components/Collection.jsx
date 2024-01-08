import React from "react";
import pic2 from "../assets/IMAGE-1.webp";
import pic1 from "../assets/IMAGE-2.webp";
import pic3 from "../assets/IMAGE-3.webp";

const Collection = () => {
  return (
    <section className="px-4 md:px-6">
      <div className="py-8 md:py-12 ">
        <h1 className="text-center font-Josefin-Slab font-bold text-5xl">
          Other Collections
        </h1>
      </div>

      <div className="flex justify-center items-center">
        <div className="relative flex justify-start items-center gap-6 overflow-auto px-2 scroll-smooth">
          <div className="aspect-[2/3] w-full h-full scroll-card ">
            <img
              src={pic1}
              alt="pic-1"
              className="w-full h-full max-w-[360px] object-cover min-w-[280px]"
            />
            <figcaption className="py-2 font-Josefin-Sans">
              Whims & Fancies
            </figcaption>
          </div>

          <div className="aspect-[2/3] w-full h-full scroll-card">
            <img
              src={pic3}
              alt="pic-3"
              className="w-full h-full max-w-[360px] object-cover min-w-[280px]"
            />
            <p className="py-2 font-Josefin-Sans">Wild Romance</p>
          </div>
          <div className=" aspect-[2/3] w-full h-full scroll-card">
            <img
              src={pic2}
              alt="pic-2"
              className="w-full h-full max-w-[360px] object-cover min-w-[280px]"
            />
            <figcaption className="py-2 font-Josefin-Sans">
              Cityscape
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
