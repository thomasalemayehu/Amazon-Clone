import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(process.env.stripe_public_key);
// Auth
import { useSession } from "next-auth/react";
import axios from "axios";

function Checkout() {
  const itemsInCart = useSelector(selectItems);
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
          {/* TODO:Make Local Image */}
          {/* Ad Image */}
          <Image
            src="https://links.papareact.com/ikj"
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
        <div className="flex flex-col bg-white p-10 shadow-md">
          {itemsInCart.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                SubTotal ({itemsInCart.length}):
                <span className="font-bold">ETB</span>
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
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
