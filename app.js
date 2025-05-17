require('dotenv').config();
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path');

// Routes
const authRoute = require('./routes/middleware/auth');
const contactRoute = require('./routes/contact');
const registerRoute = require('./routes/register');
const adminRoute = require('./routes/admin');

const app = express();

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({
  secret: process.env.SECRET_KEY || 'fallback_secret',
  resave: false,
  saveUninitialized: false
}));

// Routes
app.use('/', authRoute);
app.use('/register', registerRoute);
app.use('/contact', contactRoute);
app.use('/admin', adminRoute);

// Home page
app.get('/', (req, res) => {
  const reviews = [
    { name: "User 1", img: "https://via.placeholder.com/80", desc: "This platform is game-changing. The assessment felt natural and accurate." },
    { name: "User 2", img: "https://via.placeholder.com/80", desc: "Impressed with how quickly I got my results. Very professional experience!" },
    { name: "User 3", img: "https://via.placeholder.com/80", desc: "As someone who's always been anxious about health checks, this was easy and reassuring." }
  ];
  res.render('index', { reviews });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
