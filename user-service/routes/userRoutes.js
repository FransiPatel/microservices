const express = require('express');
const router = express.Router();

// Mock User Data (In real world, you would use a database)
let users = [
  { id: 1, username: "JohnDoe", phone: "1234567890", email: "johndoe@example.com" },
  { id: 2, username: "JaneDoe", phone: "0987654321", email: "janedoe@example.com" }
];

// Get all users
router.get('/users', (req, res) => {
  res.json(users);
});

module.exports = router;
