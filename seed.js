require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  const user = new User({
    email: 'admin@example.com',
    password: 'password123',
  });

  await user.save();
  console.log('Sample admin user created');
  process.exit();
}).catch(err => console.error(err));
