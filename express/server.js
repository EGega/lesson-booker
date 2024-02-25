// const express = require('express')
// require('dotenv').config()
// const cors = require('cors')
// // const bodyParser = require('body-parser');
// const stripe = require("stripe")(process.env.stripeApi)

// const app = express()
// const port = 4000

// // app.use(bodyParser.json());
// app.use(cors())
// app.use(express.static("public"))
// app.use(express.json())

// app.post('/create-checkout-session', async (req, res) => {
//   console.log(req.body);
//   const { items } = req.body;

//   let lineItems = [];
//   items?.map((item) => {
//     lineItems.push({
//       price_data: {
//         currency: 'usd',
//         product_data: {
//           name: item.title,
//         },
//         unit_amount: item.price * 100, // Stripe requires amount in cents
//       },
//       price: item.price,
//       quantity: item.quantity,
//     })
//   })
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     // line_items: items?.map(item => ({
//     //   price_data: {
//     //     currency: 'usd',
//     //     product_data: {
//     //       name: item.title,
//     //       images: [item.image],
//     //     },
//     //     unit_amount: item.price * 100, // Stripe requires amount in cents
//     //   },
//     //   quantity: item.quantity,
//     // })),
//     line_items: lineItems,
//     mode: 'payment',
//     success_url: 'http://localhost:3000/success_url',
//     cancel_url: 'http://localhost:3000/cancel_url',
//   })
  
//   res.send(JSON.stringify({
//     url: session.url
// }))
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// })