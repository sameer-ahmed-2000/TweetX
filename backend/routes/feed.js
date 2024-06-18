const express = require('express');
const router = express.Router();
require('dotenv').config();
const {Following, Post}=require("../db");
const { authMiddleware } = require('../middleware');

router.post('/posts', authMiddleware, async (req, res) => {
    try {
        const { content } = req.body;
        const authorId = req.userId;
        const newPost = new Post({ content, author: authorId });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.get('/myposts', authMiddleware, async (req, res) => {
    try {
        const myPosts = await Post.find({ author: req.userId })
                                    .sort({ createdAt: -1 }) // Sort by newest first
                                    .populate('author', 'fullName');
        res.json(myPosts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/feed', authMiddleware, async (req, res) => {
    try {
        const followingList = await Following.findOne({ user: req.userId }).populate('following');
        const followingIds = followingList ? followingList.following.map(user => user._id) : [];

        const posts = await Post.find({ author: { $in: followingIds } })
                                .sort({ createdAt: -1 }) // Sort by newest first
                                .populate('author', 'fullName');
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;