import { buffer, send } from "micro";
import * as admin from "firebase-admin";

// firebase config
const serviceAccount = require("../../../firebase-permissions.json");
const app = !admin.apps
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

//   strip config
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const endPointSecret = process.env.STRIPE_SIGNING_SECRET;
export default async (req, res) => {
  if (req.method === "POST") {
    // verify if event is from stripe
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const signature = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        payload,
        signature,
        endPointSecret
      );
    } catch (err) {
      console.log("ERR : " + err);
      return res.status(400), send("Webhook error");
    }

    // Complete Checkout event call
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
    }
  }
};
