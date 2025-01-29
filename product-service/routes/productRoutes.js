const express = require('express');
const router = express.Router();

// Mock Product Data (In real world, you would use a database)
let products = [
  { id: 101, name: "Laptop", price: 1000 },
  { id: 102, name: "Smartphone", price: 500 }
];

// Get all products
router.get('/products', (req, res) => {
  res.json(products);
});

module.exports = router;
