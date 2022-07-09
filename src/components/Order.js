import React from "react";
import moment from "moment";
function Order({ id, amount, items, timestamp, images }) {
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center bg-gray-100 space-x-10 p-5 text-sm">
        {/*  */}
        <div>
          <p className="font-bold text-xs">Order Placed</p>
          <p>{moment.unix(timestamp).format("DD MMM YYYY")}</p>
        </div>

        {/*  */}
        <div>
          <p className="text-xs font-bold">TOTAL</p>
          <p>{amount}</p>
        </div>

        {/*  */}
        <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
          {items.length} ITEMS
        </p>

        {/*  */}
        <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
          ORDER # {id}
        </p>
      </div>

      {/* Images */}
      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
          {images.map((image) => (
            <img src={image} className="h-20 object-contain" key={image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Order;
