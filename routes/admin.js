const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const requireAuth = require('../routes/middleware/auth');

router.get('/messages', requireAuth, async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.render('admin-messages', { messages });
  } catch (err) {
    console.error(err);
    res.send('Error loading messages');
  }
});

module.exports = router;
