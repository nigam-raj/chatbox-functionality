const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const mongoURI = 'mongodb+srv://amanahuja:3YeGQNF5NYRyTIXg@cluster0.yvfdvp9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB URI
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected Successfully');
    } catch (err) {
        console.error('MongoDB connection failed:', err.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
