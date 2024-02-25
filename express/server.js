require('dotenv').config()
const express = require('express')
const cors = require('cors')

const stripe = require("stripe")(process.env.stripeApi)

const app = express()
const port = 4000

app.use(bodyParser.json());

app.post('/create-checkout-session', async (req, res) => {
  const { items } = req.body;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: items.map(item => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.title,
          images: [item.image],
        },
        unit_amount: item.price * 100, // Stripe requires amount in cents
      },
      quantity: item.quantity,
    })),
    mode: 'payment',
    success_url: 'http://localhost:3000/success_url',
    cancel_url: 'http://localhost:3000/cancel_url',
  });

  res.json({ id: session.id });
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})