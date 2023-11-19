import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(process.env.stripe_public_key);
// import Currency from "react-currency-formatter";
// Auth
import { useSession } from "next-auth/react";
import axios from "axios";

function Checkout() {
  const itemsInCart = useSelector(selectItems);
  const totalPrice = useSelector(selectTotal);
  const { data: session } = useSession();

  // Checkout function
  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    // create checkout session
    const checkoutSession = await axios.post("/api/create-stripe-session", {
      itemsInCart,
      email: session.user?.email,
    });

    // redirect
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  // main
  return (
    <div className="bg-grey-100">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Preview Section */}
        <div className="flex-grow m-5 shadow-sm">
          {/* Ad Image */}
          <Image
            src="/images/Ad-1.png"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {itemsInCart.length === 0
                ? "Your Cart is Empty"
                : "Your Shopping Cart"}
            </h1>

            {itemsInCart.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
              />
            ))}
          </div>
        </div>

        {/* Checkout Section */}
        <div className=" ">
          {itemsInCart.length > 0 && (
            <div className="shadow-md p-10 flex flex-col bg-white h-full">
              <h2 className="whitespace-nowrap">
                Subtotal ({itemsInCart.length} items):
                <span className="font-bold">
                  {" "}
                  <div quantity={totalPrice} currency="ETB" />
                </span>
              </h2>

              <button
                role="link"
                onClick={createCheckoutSession}
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-grey-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to checkout" : "Checkout"}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
