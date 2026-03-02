require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const User = require('./models/User');
const Contact = require('./models/Contact');

// Email transporter configuration (OVH SMTP)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'ssl0.ovh.net',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true,
  auth: {
    user: process.env.SMTP_USER || 'contact@naamâ.com',
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Verify email connection on startup
transporter.verify()
  .then(() => console.log('SMTP email connection verified'))
  .catch(err => console.error('SMTP connection error:', err.message));

// Helper: send email notification
async function sendEmailNotification(subject, htmlBody) {
  try {
    await transporter.sendMail({
      from: `"Naamâ" <${process.env.SMTP_USER || 'contact@naamâ.com'}>`,
      to: process.env.SMTP_USER || 'contact@naamâ.com',
      subject,
      html: htmlBody,
    });
    console.log('Email notification sent:', subject);
  } catch (error) {
    console.error('Failed to send email:', error.message);
  }
}

const app = express();

// Environment variables
const PORT = process.env.PORT || 5000;

// Configure CORS - Allow all origins in development, specific origin in production
app.use((req, res, next) => {
  const allowedOrigin = process.env.NODE_ENV === 'production'
    ? 'https://naamâ.com'
    : req.headers.origin;

  res.header('Access-Control-Allow-Origin', allowedOrigin);
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

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

// Get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Failed to fetch users' });
  }
});

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

    // Send email notification
    await sendEmailNotification(
      `New Contact/Partner Request from ${name}`,
      `<h2>New Contact Form Submission</h2>
       <p><strong>Name:</strong> ${name}</p>
       <p><strong>Email:</strong> ${email}</p>
       <p><strong>Company/Restaurant:</strong> ${company}</p>
       <p><strong>Message:</strong></p>
       <p>${message}</p>
       <hr>
       <p style="color:#888;font-size:12px;">Submitted on ${new Date().toLocaleString()}</p>`
    );

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

    // Send email notification for new signup
    await sendEmailNotification(
      `New Early Access Signup: ${email}`,
      `<h2>New Early Access Signup</h2>
       <p><strong>Email:</strong> ${email}</p>
       <p><strong>Phone:</strong> ${phone}</p>
       <hr>
       <p style="color:#888;font-size:12px;">Signed up on ${new Date().toLocaleString()}</p>`
    );

    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
