import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useDispatch } from "react-redux";

import { addToCart, removeFromCart } from "../slices/basketSlice";
// import Currency from "react-currency-formatter";
import { toast } from "react-toastify";

function CheckoutProduct({ id, title, price, description, category, image }) {
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
      // TODO:Fix remove from cart
    };

    dispatch(addToCart(product));
    toast.success(`${title} added to cart!`);
  };

  // Add Remove Function
  const removeItemFromCart = () => {
    dispatch(removeFromCart({ id }));
    toast.error(`${title} removed from cart!`);
  };
  return (
    <div className="grid grid-cols-5">
      <Image src={image} width={200} height={200} objectFit="contain" />

      {/* COntent */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>

        {/* Rating */}
        <div className="flex">
          <StarIcon className="h-5 text-yellow-500" />
          <StarIcon className="h-5 text-yellow-500" />
          <StarIcon className="h-5 text-yellow-500" />
        </div>

        {/* Desc */}
        <p className="text-xs my-2 line-clamp-3">{description}</p>

        {/* Price */}
        <h6>
          <div quantity={price * 55} currency="ETB" />
        </h6>

        {/* Prime */}
        <div className="flex w items-center space-x-2">
          <img
            loading="lazy"
            src="/images/Prime-tag-.png"
            alt=""
            className="w-12"
          />
          <p className="text-xs text-gray-500">Next Day Delivery</p>
        </div>
      </div>

      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button" onClick={addItemToCart}>
          Add to Cart
        </button>
        <button className="button" onClick={removeItemFromCart}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

// TODO:Counter of Item when multiple
