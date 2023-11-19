import React, { useState } from "react";

// Components
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/basketSlice";
// import Currency from "react-currency-formatter";
import { toast } from "react-toastify";

// Constants
const MIN_PRODUCT_RATING = 1;
const MAX_PRODUCT_RATING = 5;

function Product({ id, title, price, description, category, image }) {
  const { rating } = useState(
    Math.floor(
      Math.random() * (MAX_PRODUCT_RATING - MIN_PRODUCT_RATING + 1) +
        MIN_PRODUCT_RATING
    )
  );

  const { hasPrime } = useState(Math.random);
  const dispatch = useDispatch();

  // Add Function
  const addItemToCart = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,

      // TODO:Add has prime & rating
    };

    dispatch(addToCart(product));
    toast.success(`${title} added to cart!`);
  };
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 custom__product__card">
      {/* Product Category */}
      <p className="absolute top-2 right-2 text-grey-400 italic text-xs capitalize">
        {category}
      </p>

      {/* Product Image */}
      <Image src={image} height={200} width={200} objectFit="contain" />

      {/* Title */}
      <h4 className="my-3">{title}</h4>

      {/* Rating */}
      <div className="flex">
        {/* TODO:Make Rating Dynamic */}
        <StarIcon className="h-5 text-yellow-500" />
        <StarIcon className="h-5 text-yellow-500" />
        <StarIcon className="h-5 text-yellow-500" />
      </div>

      {/* Description */}
      <p className="text-xs my-2 line-clamp-2">{description}</p>

      {/* Price */}
      <div className="mb-5">
        <div quantity={price * 55} currency="ETB" />
      </div>

      {/* TODO:Make Prime Dynamic */}
      {/* Prime */}
      {/* {hasPrime && ( */}
      <div className="flex flex-row items-center space-x-2 -mt-5">
        <img
          loading="lazy"
          src="/images/Prime-tag-.png"
          alt=""
          className="w-12"
        />
        <p className="text-xs text-gray-500">Next Day Delivery</p>
      </div>
      {/* )} */}

      <button className="mt-auto button" onClick={addItemToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
