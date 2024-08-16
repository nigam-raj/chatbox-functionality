const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: false, // Text message (can be empty if it's just a file)
    },
    file: {
        data: String,         // Base64 string
        contentType: String,  // MIME type
        fileName: String,     // File name
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

const Message = mongoose.model('Message', MessageSchema);
module.exports = Message;
