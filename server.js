const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// User Authentication (Pseudo Code)
app.post('/register', (req, res) => {
    // Handle user registration
});

app.post('/login', (req, res) => {
    // Handle user login
});

// Middleware for authentication
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

// Example protected route
app.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.send('Welcome to your dashboard!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
