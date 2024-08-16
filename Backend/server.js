// const express = require('express');
// const bodyParser = require('body-parser');
// const fileUpload = require('express-fileupload');
// const cors = require('cors'); // Import cors
// const connectDB = require('./config/db');
// const messageRoutes = require('./routes/Messages');

// // Initialize express
// const app = express();

// // Connect to database
// connectDB();

// // Middleware for handling CORS
// app.use(cors({
//     origin: 'http://localhost:3000', // Replace with your frontend URL
// }));

// // Middleware for parsing JSON and URL-encoded data
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Middleware for handling file uploads
// app.use(fileUpload({
//     limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB limit
// }));

// // Routes
// app.use('/api', messageRoutes);

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const connectDB = require('./config/db');
const messageRoutes = require('./routes/Messages');

// Initialize express
const app = express();

// Connect to database
connectDB();

// Middleware for handling CORS
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
}));

// Middleware for parsing JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware for handling file uploads
app.use(fileUpload({
    limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB limit
}));

// Routes
app.use('/api', messageRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
