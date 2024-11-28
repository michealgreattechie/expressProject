const express = require('express'); // Importimg Express.js
const bodyParser = require('body-parser'); // Middleware to parse POST request body
const app = express();
const port = 3000;

//  array to store submitted feedback
let feedbackArray = [];

// Set up middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Set up EJS as the template engine (optional, you can use plain HTML too)
app.set('view engine', 'ejs');

// Route to render the feedback form
app.get('/', (req, res) => {
    res.send(`
        <h1>Feedback Form</h1>
        <form action="/submit" method="POST">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" required><br><br>
            <label for="message">Feedback:</label><br>
            <textarea id="message" name="message" required></textarea><br><br>
            <button type="submit">Submit</button>
        </form>
    `);
});

// Route to handle form submissions
app.post('/submit', (req, res) => {
    const { name, message } = req.body; // Extract form data from the request body
    feedbackArray.push({ name, message }); // Store the feedback temporarily in the array
    res.send(`
        <h2>Thank you for your feedback, ${name}!</h2>
        <p><a href="/feedback">View All Feedback</a></p>
        <p><a href="/">Back to Form</a></p>
    `);
});

// Route to display all submitted feedback
app.get('/feedback', (req, res) => {
    //  HTML to display all feedback entries
    let feedbackHtml = '<h1>Submitted Feedback</h1>';
    if (feedbackArray.length === 0) {
        feedbackHtml += '<p>No feedback yet!</p>';
    } else {
        feedbackHtml += '<ul>';
        feedbackArray.forEach((fb, index) => {
            feedbackHtml += `<li><strong>${fb.name}:</strong> ${fb.message}</li>`;
        });
        feedbackHtml += '</ul>';
    }
    feedbackHtml += '<p><a href="/">Back to Form</a></p>';
    res.send(feedbackHtml);
});

// server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
