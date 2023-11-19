import React from "react";

// Auth
import { signIn, signOut, useSession } from "next-auth/react";

// Router
import { useRouter } from "next/router";

// Components
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const itemsInCart = useSelector(selectItems);

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top Header */}
      <div className="flex items-center bg-amazon_blue p-1 py-2 flex-grow">
        {/* Image */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          {/* Amazon Large Logo */}
          <Image
            src="/images/Amazon-Main-Logo.png"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
            onClick={() => router.push("/")}
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
          {/* <div className="link" onClick={!session ? signIn : signOut}>
            <p>{session ? `Hello ${session.user.name}` : "Sign In"}</p>
            <p className="font-extrabold md:text-sm">Accounts & List</p>
          </div> */}

          {/* Orders */}
          <div
            className="link"
            onClick={() => session && router.push("/orders")}
          >
            <p>Return </p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          {/* Cart */}
          <div
            className="relative flex items-center link"
            onClick={() => router.push("/checkout")}
          >
            {/* Counter */}
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold text-xs">
              {itemsInCart.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="font-extrabold md:text-sm hidden md:inline mt-2">
              Cart
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Header */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>

        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>

        {/* Lg Display Only */}
        <p className="hidden lg:inline-flex link">Electronics</p>
        <p className="hidden lg:inline-flex link">Grocery & Food</p>
        <p className="hidden lg:inline-flex link">Prime</p>
        <p className="hidden lg:inline-flex link">Buy Again</p>
        <p className="hidden lg:inline-flex link">Shopper Toolkit</p>
        <p className="hidden lg:inline-flex link">Health & Personal Career</p>
      </div>
    </header>
  );
}

export default Header;
