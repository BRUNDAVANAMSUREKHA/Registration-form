const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/registration', { useNewUrlParser: true, useUnifiedTopology: true });

// Define user schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Validation middleware
const validateRegistration = [
  body('username').notEmpty().withMessage('Username is required'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
];

// Handle registration form submission
app.post('/register', validateRegistration, async (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Handle login form submission
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
