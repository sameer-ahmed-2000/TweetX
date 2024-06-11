const express = require('express');
const router = express.Router();
require('dotenv').config();
const {User, Follower, Following, Post}=require("../db");

router.post('/posts', authenticateToken, async (req, res) => {
    try {
        const { content } = req.body;
        const authorId = req.user.id;
        const newPost = new Post({ content, author: authorId });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.post('/posts', authenticateToken, async (req, res) => {
    try {
        const { content } = req.body;
        const authorId = req.user.id;
        const newPost = new Post({ content, author: authorId });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;