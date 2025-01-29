const express = require('express');
const bodyParser = require('body-parser');
const communicator = require('./services/communicator');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Route to get all users (from User Service)
app.get('/users', async (req, res) => {
  try {
    const users = await communicator.getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get all products (from Product Service)
app.get('/products', async (req, res) => {
  try {
    const products = await communicator.getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get all orders (from Order Service)
app.get('/orders', async (req, res) => {
  try {
    const orders = await communicator.getOrders();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to place an order (via Order Service)
app.post('/orders', async (req, res) => {
  const { userId, productId, quantity } = req.body;
  try {
    const order = await communicator.placeOrder(userId, productId, quantity);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`API Gateway is running on http://localhost:${port}`);
});
