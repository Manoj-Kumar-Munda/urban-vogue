import React from "react";
import pic1 from "../../assets/IMAGE-2.webp";
import pic3 from "../../assets/IMAGE-3.webp";
import pic2 from "../../assets/IMAGE-1.webp";
import pic4 from "../../assets/IMAGE-4.webp";
import pic5 from "../../assets/IMAGE-5.webp";
import pic6 from "../../assets/IMAGE-6.webp";
import Carousel from "../../components/Carousel";

const Collections = () => {
  const collection1 = [
    { pic: pic1, title: "Whims & Fancies" },
    { pic: pic2, title: "Wild Romance" },
    { pic: pic3, title: "Cityscape" },
  ];

  const collection2 = [
    { pic: pic4, title: "Newtro Twist" },
    { pic: pic5, title: "#IDGAF" },
    { pic: pic6, title: "Born To Shine" },
  ];
  return (
    <section className="pl-4 md:px-6">
      <div className="py-8 md:py-12 ">
        <h1 className="text-center font-Josefin-Slab font-bold text-2xl md:text-5xl">
          Other Collections
        </h1>
      </div>

      <Carousel collections={collection1} />
      <Carousel collections={collection2} />
    </section>
  );
};

export default Collections;
