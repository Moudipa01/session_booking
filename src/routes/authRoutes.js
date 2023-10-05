const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/register', (req, res) => {
  const { universityID, password } = req.body;
  const user = authController.registerUser(universityID, password);
  res.json({ token: user.token });
});

router.post('/login', (req, res) => {
  const { universityID, password } = req.body;
  const user = authController.loginUser(universityID, password);
  if (user) {
    res.json({ token: user.token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
