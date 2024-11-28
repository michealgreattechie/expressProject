import express from 'express';
import { feedbackArray } from '../data/feedbackData.js';

const router = express.Router();

// Route to render the feedback form
router.get('/', (req, res) => {
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

                                                                                            // Route to handle form submissions💪🏻
                                                                                            router.post('/submit', (req, res) => {
                                                                                                const { name, message } = req.body; // Extracting form data from the request body
                                                                                                    feedbackArray.push({ name, message }); // Storing feedback temporarily
                                                                                                        res.send(`
                                                                                                                <h2>Thank you for your feedback, ${name}!</h2>
                                                                                                                        <p><a href="/feedback">View All Feedback</a></p>
                                                                                                                                <p><a href="/">Back to Form</a></p>
                                                                                                                                    `);
                                                                                                                                    });

                                                                                                                                    // Route to display all submitted feedback
                                                                                                                                    router.get('/feedback', (req, res) => {
                                                                                                                                        // HTML to display all feedback entries
                                                                                                                                            let feedbackHtml = '<h1>Submitted Feedback</h1>';
                                                                                                                                                if (feedbackArray.length === 0) {
                                                                                                                                                        feedbackHtml += '<p>No feedback yet!</p>';
                                                                                                                                                            } else {
                                                                                                                                                                    feedbackHtml += '<ul>';
                                                                                                                                                                            feedbackArray.forEach((fb) => {
                                                                                                                                                                                        feedbackHtml += `<li><strong>${fb.name}:</strong> ${fb.message}</li>`;
                                                                                                                                                                                                });
                                                                                                                                                                                                        feedbackHtml += '</ul>';
                                                                                                                                                                                                            }
                                                                                                                                                                                                                feedbackHtml += '<p><a href="/">Back to Form</a></p>';
                                                                                                                                                                                                                    res.send(feedbackHtml);
                                                                                                                                                                                                                    });

                                                                                                                                                                                                                    export default router;