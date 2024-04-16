const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  res.send('Handling user login');
});

router.post('/register', (req, res) => {
  res.send('Handling user registration');
});

module.exports = router;
