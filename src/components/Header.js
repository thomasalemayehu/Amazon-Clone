import React from "react";

// Components
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      {/* Top Header */}
      <div className="flex items-center bg-amazon_blue p-1 py-2 flex-grow">
        {/* Image */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          {/* TODO:Make Local Image */}
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* Search Bar */}
        <div className=" hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Util Section */}
        <div className="text-white flex items-center text-xs  space-x-6 mx-6 whitespace-nowrap">
          {/* Intro */}
          <div className="link">
            <p>Hello Thomas Alex</p>
            <p className="font-extrabold md:text-sm">Accounts & List</p>
          </div>

          {/* Orders */}
          <div className="link">
            <p>Return </p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          {/* Cart */}
          <div className="relative flex items-center link">
            {/* Counter */}
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              6
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="font-extrabold md:text-sm hidden md:inline mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Header */}
      <div>Bottom</div>
    </header>
  );
}

export default Header;
