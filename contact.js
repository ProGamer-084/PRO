const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());

// Contact form endpoint
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    const mailOptions = {
        from: email,
        to: 'your-email@gmail.com',
        subject: 'Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Message sent: ' + info.response);
    });
});

app.listen(3001, () => {
    console.log('Contact form server running on port 3001');
});
