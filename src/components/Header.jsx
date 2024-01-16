import { Search, ShoppingCart } from "lucide-react";
import React, { useState } from "react";

const Header = () => {
  const [mouseOverIcon, setMouseOverIcon] = useState('')
  return (
    <header className="fixed z-10 top-0 bg-slate-800/35 left-0 right-0">
      <div className="w-full flex px-4 md:w-8/12 md:mx-auto justify-between py-4">
        <div className=" md:flex-1">
          <div className="inline-block text-center">
            <h1 className="text-4xl text-gray-300 font-Josefin-Sans">UV</h1>
            <span className="hidden md:block font-Josefin-Slab text-gray-300">Urban Vogue</span>
          </div>
        </div>
        <ul className="hidden md:flex flex-1 justify-between px-10 items-center gap-8">
          <li className="text-gray-300 transition-colors hover:text-white hover:cursor-pointer">
            <span className="link-text">HOME</span>
          </li>
          <li className="text-gray-300 transition-colors hover:text-white hover:cursor-pointer">
            <span className="link-text">EXPLORE</span>
          </li>
          <li className="text-gray-300 transition-colors hover:text-white hover:cursor-pointer">
            <span className="link-text">CIRCULATORY</span>
          </li>
          <li className="text-gray-300 transition-colors hover:text-white hover:cursor-pointer">
            <span className="link-text">ACCOUNT</span>
          </li>
        </ul>
        <div className="md:flex-1 self-center ">
          <div className="flex justify-end gap-8">
            <div className="hover:cursor-pointer" onMouseOver={() => setMouseOverIcon('search')} onMouseOut={() => setMouseOverIcon('')}>
              <Search strokeWidth={1} color={ mouseOverIcon === 'search' ? "#fff" : "#d1d5db"} />
            </div>
            <div className="hover:cursor-pointer" onMouseOver={() => setMouseOverIcon('cart')} onMouseOut={() => setMouseOverIcon('')} >
              <ShoppingCart strokeWidth={1} color={ mouseOverIcon === 'cart' ? "#fff" : "#d1d5db"} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
