const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const mysql2 = require('mysql2');
const cors = require('cors'); // Import cors middleware

// Initialize Firebase Admin SDK
const admin = require('firebase-admin');
admin.initializeApp();

const app = express();
const port = 3000;
// Database configuration
const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'deliauralogin'
});
// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');
});
// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

app.post('/send-otp', async (req, res) => {
    const { phoneNumber, storedOtp } = req.body;

    try {
        // Save phone number, generated OTP, and frontend OTP to the database
        const insertOtpQuery = 'INSERT INTO user_login (phoneNumber, storedOtp,status) VALUES (?, ?,?)';
        db.query(insertOtpQuery, [phoneNumber, storedOtp,'logged in'], (err, result) => {
            if (err) {
                console.error('Error storing OTP to database:', err);
                res.status(500).json({ error: 'Error storing OTP to database' });
                return;
            }
            console.log('OTP stored to database');
            res.status(200).json({ message: 'OTP stored successfully' });
        });
    } catch (error) {
        console.error('Error storing OTP:', error.message);
        res.status(500).json({ error: error.message });
    }
});
// API endpoint to verify OTP

app.post('/verify-otp', async (req, res) => {
  const { phoneNumber, storedOtp } = req.body;

  try {
    // Check if the provided phone number and OTP match an existing record in the database
    const selectLoginQuery = 'SELECT * FROM user_login WHERE phoneNumber = ? AND storedOtp = ?';
    db.query(selectLoginQuery, [phoneNumber, storedOtp,'logged in'], (err, results) => {
      if (err) {
        console.error('Error querying database:', err);
        res.status(500).json({ error: 'Error querying database' });
        return;
      }
      if (results.length === 0) {
        // No matching record found, indicating invalid phone number or OTP
        // Insert a new record with 'logged_out' status
        const insertLoginStatusQuery = 'INSERT INTO user_login (phoneNumber, storedOtp, status) VALUES (?, ?, ?)';
        db.query(insertLoginStatusQuery, [phoneNumber, storedOtp, 'logged_out'], (err, result) => {
          if (err) {
            console.error('Error inserting login status:', err);
            res.status(500).json({ error: 'Error inserting login status' });
            return;
          }
          console.log('Login status inserted as logged_out in database');
          res.status(400).json({ error: 'Invalid phone number or OTP' });
        });
        return;
      }
      // Matching record found, update the login status in the database
      const loginStatus = results[0].status === 'logged_in' ? 'logged_out' : 'logged_in';
      const updateLoginStatusQuery = 'UPDATE user_login SET status = ? WHERE phoneNumber = ? AND storedOtp = ?';
      db.query(updateLoginStatusQuery, [loginStatus, phoneNumber, storedOtp], (err, result) => {
        if (err) {
          console.error('Error updating login status:', err);
          res.status(500).json({ error: 'Error updating login status' });
          return;
        }
        console.log('Login status updated in database');
        res.status(200).json({ message: 'Login status updated successfully', status: loginStatus });
      });
    });
  } catch (error) {
    console.error('Error logging in:', error.message);
    res.status(500).json({ error: 'Error logging in' });
  }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Expose Express app as a Firebase Cloud Function
exports.api = functions.https.onRequest(app);
