import React from "react";
import Header from "../components/Header";
import { useSession } from "next-auth/react";
import moment from "moment";
import db from "../../firebase";
import { getSession } from "next-auth/react";
import Order from "../components/Order";

function Orders({ orders }) {
  const { data: session } = useSession();

  return (
    <div>
      <Header />

      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
          Your Orders
        </h1>

        {session ? <h2> {orders.length} orders</h2> : <h2>Sign In</h2>}

        <div className="mt-5 space-y-4 ">
          {orders?.map(({ id, timestamp, amount, items, category, images }) => (
            <Order
              key={id}
              id={id}
              timestamp={timestamp}
              amount={amount}
              items={items}
              images={images}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Orders;

export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  //   get session
  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }

  const stripeOrders = await db
    .collection("users")
    .doc(session.user.email)
    .collection("orders")
    .orderBy("timestamp", "desc")
    .get();

  const orders = JSON.parse(
    JSON.stringify(
      await Promise.all(
        stripeOrders.docs.map(async (order) => ({
          id: order.id,
          amount: order.data().amount,
          images: order.data().images,
          timestamp: moment(order.data().timestamp.toDate()).unix(),
          items: (
            await stripe.checkout.sessions.listLineItems(order.id, {
              limit: 100,
            })
          ).data,
        }))
      )
    )
  );

  return {
    props: {
      orders,
    },
  };
}
