const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// Fetch messages
router.get('/messages', async (req, res) => {
    try {
        const messages = await Message.find().sort({ timestamp: -1 });
        res.json(messages);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

// Send message (text only)
router.post('/messages', async (req, res) => {
    const { user, message } = req.body;

    try {
        const newMessage = new Message({ user, message });
        await newMessage.save();
        res.json(newMessage);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

// Upload file (image or document)
router.post('/upload', async (req, res) => {
    const { user } = req.body;
    const file = req.files?.file;

    if (!file) {
        return res.status(400).send('No file uploaded');
    }

    console.log('Received file:', file);  // Debugging line

    const newMessage = new Message({
        user,
        file: {
            data: file.data.toString('base64'),
            contentType: file.mimetype,
            fileName: file.name,
        },
    });

    try {
        await newMessage.save();
        res.json(newMessage);
    } catch (error) {
        console.error('Error saving file to DB:', error);  // Debugging line
        res.status(500).send('Server Error');
    }
});


module.exports = router;
