const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function CreateStripeSession(req, res) {
  const { itemsInCart, email } = req.body;

  //   transform to stripe item
  const transformedItems = itemsInCart.map((item) => ({
    description: item.description,
    quantity: 1,
    price_data: {
      unit_amount: item.price * 100,
      currency: "usd",
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
  }));
  const redirectURL = process.env.HOST;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: transformedItems,
    mode: "payment",
    success_url: redirectURL + "/success",
    cancel_url: redirectURL + "/checkout",
    metadata: {
      email,
      images: JSON.stringify(itemsInCart.map((item) => item.image)),
    },
  });

  res.status(200).json({ id: session.id });
}

export default CreateStripeSession;
