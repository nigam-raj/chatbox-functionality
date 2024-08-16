import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FaPaperclip, FaImage } from 'react-icons/fa';

const ChatBox = styled.div`
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-top: 20px;
    flex: 1;
`;

const ChatHeader = styled.div`
    font-weight: bold;
    margin-bottom: 10px;
`;

const ChatContent = styled.div`
    background: #f5f5f5;
    padding: 10px;
    border-radius: 5px;
    height: 200px;
    overflow-y: scroll;
`;

const ChatInput = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

const Input = styled.input`
    flex: 1;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
`;

const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background: #6b7db3;
    color: #fff;
    margin-left: 10px;
    cursor: pointer;
`;

const FileInputLabel = styled.label`
    cursor: pointer;
    margin-left: 10px;
    color: #6b7db3;
    font-size: 20px;
`;

const HiddenFileInput = styled.input`
    display: none;
`;

const Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/messages');
            setMessages(response.data);
        } catch (error) {
            console.error('Error fetching messages', error);
        }
    };

    const handleSendMessage = async () => {
        if (message.trim()) {
            try {
                const response = await axios.post('http://localhost:5000/api/messages', {
                    user: 'User',  // Replace with dynamic user data if available
                    message,
                });
                setMessages([response.data, ...messages]);
                setMessage('');
            } catch (error) {
                console.error('Error sending message', error);
            }
        }
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('user', 'User');  // Replace with dynamic user data if available

        try {
            const response = await axios.post('http://localhost:5000/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setMessages([response.data, ...messages]);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <ChatBox>
            <ChatHeader>Chat With HR</ChatHeader>
            <ChatContent>
                {messages.length > 0 ? (
                    messages.map((msg, index) => (
                        <p key={index}>
                            <strong>{msg.user}:</strong> 
                            {msg.message && <span>{msg.message}</span>}
                            {msg.file && (
                                msg.file.contentType.startsWith('image/') ? (
                                    <img
                                        src={`data:${msg.file.contentType};base64,${msg.file.data}`}
                                        alt={msg.file.fileName}
                                        style={{ maxWidth: '200px', maxHeight: '200px', display: 'block', marginTop: '10px' }}
                                    />
                                ) : (
                                    <a 
                                        href={`data:${msg.file.contentType};base64,${msg.file.data}`} 
                                        download={msg.file.fileName}
                                        style={{ display: 'block', marginTop: '10px', color: '#6b7db3' }}
                                    >
                                        {msg.file.fileName}
                                    </a>
                                )
                            )}
                        </p>
                    ))
                ) : (
                    <p>No messages to display</p>
                )}
            </ChatContent>
            <ChatInput>
                <Input 
                    type="text" 
                    placeholder="Type a message..." 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <FileInputLabel>
                    <FaPaperclip />
                    <HiddenFileInput type="file" accept=".pdf,.doc,.docx" onChange={handleFileUpload} />
                </FileInputLabel>
                <FileInputLabel>
                    <FaImage />
                    <HiddenFileInput type="file" accept="image/*" onChange={handleFileUpload} />
                </FileInputLabel>
                <Button onClick={handleSendMessage}>Send</Button>
            </ChatInput>
        </ChatBox>
    );
}

export default Chat;
