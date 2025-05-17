const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcrypt');

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.redirect('/?loginError=true');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.redirect('/?loginError=true');

    req.session.userId = user._id;
    res.redirect('/dashboard');
  } catch (err) {
    console.error(err);
    res.redirect('/');
  }
});

// Dashboard route (only accessible if logged in)
router.get('/dashboard', (req, res) => {
  if (!req.session.userId) return res.redirect('/');
  res.render('dashboard');
});

// Logout
router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

module.exports = router;
