import express from 'express';
import bodyParser from 'body-parser';
import feedbackRoutes from './routes/feedbackRoutes.js';

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Use feedback routes
app.use('/', feedbackRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
    });