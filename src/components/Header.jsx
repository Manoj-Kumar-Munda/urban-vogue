import { Search, ShoppingCart } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <header className="fixed z-10 top-0 bg-slate-800/35 left-0 right-0">
      <div className="hidden md:flex w-8/12 mx-auto justify-between py-4">
        <div className="flex-1">
          <div className="inline-block text-center">
            <h1 className="text-4xl text-gray-300 font-Josefin-Sans">UV</h1>
            <span className="font-Josefin-Slab text-gray-300">Urban Vogue</span>
          </div>
        </div>
        <ul className="flex flex-1 justify-between px-10 items-center gap-8">
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
        <div className="flex-1 self-center">
          <div className="flex justify-end gap-8">
            <div className="hover:cursor-pointer">
              <Search strokeWidth={1} color={"#d1d5db"} />
            </div>
            <div className="hover:cursor-pointer">
              <ShoppingCart strokeWidth={1} color={"#d1d5db"} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
