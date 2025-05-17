const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.get('/', (req, res) => {
  res.render('contact', { success: false });
});

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.render('contact', { success: true });
  } catch (err) {
    console.error(err);
    res.render('contact', { success: false });
  }
});

module.exports = router;
