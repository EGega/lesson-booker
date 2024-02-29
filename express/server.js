
const express = require('express');
const stripe = require('stripe')(process.env.stripeApi); 
require('dotenv').config()
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  console.log(req.body); // Log the entire request body
  const { items } = req.body;
 try { const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items: items?.map((item) => ({
            price_data: {
              currency: 'usd', // Adjust currency if needed
              product_data: {
                name: item.title,
                description: item.author,
              },
              unit_amount: item.price * 100, // Convert to cents
            },
            quantity: item.quantity,
          })),
          mode: 'payment',
          success_url: 'http://localhost:3000/success_url', // Adjust your success URL
          cancel_url: 'http://localhost:3000/cancel_url', // Adjust your cancel URL
        });
    console.log("The session is", session);
        res.json({ id: session.id });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
      }
  // Rest of the code
});
app.listen(4000, () => console.log('Server listening on port 4000'));
