require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');
const Contact = require('./models/Contact');

const app = express();

// Environment variables
const PORT = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || ['http://localhost:3000', 'http://localhost:3001', 'https://cozy-sprite-5191d7.netlify.app'];

// Configure CORS
app.use(cors({
  origin: CORS_ORIGIN,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/naama_market';
console.log('Attempting to connect to MongoDB with URI:', mongoURI);

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  retryWrites: true,
  w: 'majority'
})
.then(() => {
  console.log('Successfully connected to MongoDB');
  console.log('Database Name:', mongoose.connection.name);
  console.log('Database Host:', mongoose.connection.host);
})
.catch(err => {
  console.error('MongoDB connection error details:');
  console.error('Error:', err.message);
  console.error('Full error:', err);
});

// Routes

// Get all contacts
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ message: 'Failed to fetch contacts' });
  }
});
// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ message: 'Internal server error' });
});

app.post('/api/contact', async (req, res) => {
  console.log('Received contact form submission:', req.body);
  const { name, email, company, message } = req.body;

  try {
    const contact = new Contact({
      name,
      email,
      company,
      message
    });

    await contact.save();
    console.log('Contact form submission saved:', contact);

    res.status(201).json({
      message: 'Thank you for your interest! Our team will contact you soon.',
      contact: contact
    });
  } catch (error) {
    console.error('Error saving contact form:', error);
    res.status(500).json({ message: 'Failed to submit form. Please try again.' });
  }
});

app.post('/api/signup', async (req, res) => {
  try {
    console.log('Received signup request with body:', req.body);
    
    const { email, phone } = req.body;
    console.log('Extracted email:', email);
    console.log('Extracted phone:', phone);
    
    // Check if user already exists
    console.log('Checking for existing user with email:', email);
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exists with email:', email);
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Create new user
    console.log('Creating new user...');
    const user = new User({
      email,
      phone
    });

    console.log('Saving user to database...');
    await user.save();
    console.log('User saved successfully:', user);
    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
