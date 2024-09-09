const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mywebsite', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

const User = mongoose.model('User', UserSchema);

// Example function to add a new user
async function addUser(username, password) {
    const user = new User({ username, password });
    await user.save();
}

// Example usage
addUser('user1', 'password123');
