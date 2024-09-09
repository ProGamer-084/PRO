const bcrypt = require('bcrypt');
const saltRounds = 10;

// Hash password
async function hashPassword(password) {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

// Compare password
async function comparePassword(password, hashedPassword) {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
}

// Example usage
(async () => {
    const password = 'mysecretpassword';
    const hashedPassword = await hashPassword(password);
    console.log('Hashed Password:', hashedPassword);
    
    const isMatch = await comparePassword(password, hashedPassword);
    console.log('Password Match:', isMatch);
})();
