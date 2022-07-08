import React from "react";
import Header from "../components/Header";
import Image from "next/image";

function Checkout() {
  return (
    <div className="bg-grey-100">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Preview Section */}
        <div className="flex-grow m-5 shadow-sm">
          {/* Ad Image */}
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">Your Shopping Cart</h1>
          </div>
        </div>

        {/* Checkout Section */}
        <div></div>
      </main>
    </div>
  );
}

export default Checkout;
