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
router.get('/feed/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const followingList = await Following.findOne({ user: userId }).populate('following');
        const followingIds = followingList.following.map(user => user._id);

        const posts = await Post.find({ author: { $in: followingIds } })
                                .sort({ createdAt: -1 }) // Sort by newest first
                                .populate('author', 'username');
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
module.exports = router;