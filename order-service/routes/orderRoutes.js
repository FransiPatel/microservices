const express = require('express');
const router = express.Router();

// Mock Order Data (In real world, you would use a database)
let orders = [];

// Place an order
router.post('/orders', (req, res) => {
  const { userId, productId, quantity } = req.body;
  const order = { userId, productId, quantity, orderId: orders.length + 1 };
  orders.push(order);
  res.status(201).json(order);
});

// Get all orders
router.get('/orders', (req, res) => {
  res.json(orders);
});

module.exports = router;
