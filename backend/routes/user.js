const express = require('express');
const router = express.Router();
const zod=require("zod");
require('dotenv').config();
const {User, Follower, Following, Post}=require("../db");
const jwt= require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET;

const { authMiddleware } = require("../middleware")
const signupSchema=zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string(),
    
})
router.post("/signup",async (req,res)=>{
    const {success}=signupSchema.safeParse(req.body);
    if (!success){
        return res.status(411).json({
            message:"Incorrect inputs",error: error.errors
        })
    }
    const existingUser =await User.findOne({
        username:req.body.username
    })
    if (existingUser){
        return res.status(411).json({
            message:"Email is already taken"
            
        })
    }
    const token = jwt.sign({
        userId
    },JWT_SECRET);

    res.json({
        message:"User created successfully",
        token: token
    })
})
const signinBody=zod.object({
    username:zod.string().email(),
    password:zod.string()
})
router.post("/signin",async (req,res)=>{
    const {success}=signinBody.safeParse(req.body)
    if (!success){
        return res.status(411).json({
            message:"Incorrect inputs"
        })
    }
    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });
    if (user){
        const token=jwt.sign({
            userId:user._id
        },JWT_SECRET);
        res.json({
            token:token
        })
        return;
    }
    res.status(411).json({
        message:"Error while logging in"
    })
})

router.get('/followercount',authMiddleware,async(req,res)=>{
    try{
        const user=await Follower.findById(req.userId);
        const numberOfFollowers= user?user.followers.length:0;
        res.json({numberOfFollowers});

    }catch(error){
        res.status(500).send(error.message);
    }
})

router.get('/followingcount',authMiddleware,async(req,res)=>{
    try{
        const user=await Following.findById(req.userId);
        const numberOfFollowing= user?user.following.length:0;
        res.json({numberOfFollowing});

    }catch(error){
        res.status(500).send(error.message);
    }
})

router.get('/postcount',authMiddleware,async(req,res)=>{
    try{
        const post=await Post.find({author:req.userId});
        const numberOfPost= post?post.length:0;
        res.json({numberOfPost});

    }catch(error){
        res.status(500).send(error.message);
    }
})
router.get('/users', authMiddleware, async (req, res) => {
    try {
        const users = await User.find({ _id: { $ne: req.userId } });
        const currentUserFollowing = await Following.findOne({ user: req.userId });
        const usersWithFollowingInfo = await Promise.all(users.map(async (user) => {
        const isFollowing = currentUserFollowing.following.includes(user._id);
        const followingCountDoc = await Following.findOne({ user: user._id });
        const followingCount = followingCountDoc ? followingCountDoc.following.length : 0;
        return {
            ...user.toObject(),
            isFollowing,
            followingCount
        };
        }));
    res.json(usersWithFollowingInfo);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/followers', authMiddleware, async (req, res) => {
    try {
        const followersDoc = await Follower.findOne({ user: req.userId }).populate('followers');
        const currentUserFollowingDoc = await Following.findOne({ user: req.userId });
        const followersDetails = await Promise.all(followersDoc.followers.map(async (follower) => {
            const isFollowing = currentUserFollowingDoc.following.includes(follower._id);
            
            const followingDoc = await Following.findOne({ user: follower._id });
            const followingCount = followingDoc ? followingDoc.following.length : 0;
            return {
                _id: follower._id,
                username: follower.username,
                firstName: follower.firstName,
                lastName: follower.lastName,
                isFollowing,
                followingCount
        };
        }));
        res.json({ followersDetails });
        } catch (error) {
        res.status(500).send(error.message);
        }
});
router.get('/following', authMiddleware, async (req, res) => {
    try {
        const currentUserFollowingDoc = await Following.findOne({ user: req.userId }).populate('following');
        const followingDetails = await Promise.all(currentUserFollowingDoc.following.map(async (followedUser) => {
            const followingCountDoc = await Following.findOne({ user: followedUser._id });
            const followingCount = followingCountDoc ? followingCountDoc.following.length : 0;
            return {
                _id: followedUser._id,
                username: followedUser.username,
                firstName: followedUser.firstName,
                lastName: followedUser.lastName,
                followingCount
                };
        }));
        res.json(followingDetails);
        } catch (error) {
        res.status(500).send(error.message);
    }
});
router.get("/me",authMiddleware,async (req,res)=>{
    const user= await User.findById(req.userId);
    res.json({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password

    })
});

router.post('/follow/:targetUserId', authMiddleware, async (req, res) => {
    const { targetUserId } = req.params;
    const currentUserId = req.userId;

    try {
        await Following.updateOne(
            { user: currentUserId },
            { $addToSet: { following: targetUserId } },
            { upsert: true }
        );
        await Follower.updateOne(
            { user: targetUserId },
            { $addToSet: { followers: currentUserId } },
            { upsert: true }
        );

        res.status(200).json({ message: 'Successfully followed the user.' });
    } catch (error) {
        res.status(500).json({ message: 'Error following the user.', error: error.message });
    }
});

router.post('/unfollow/:targetUserId', authMiddleware, async (req, res) => {
    const { targetUserId } = req.params;
    const currentUserId = req.userId;

    try {
        await Following.updateOne(
            { user: currentUserId },
            { $pull: { following: targetUserId } }
        );
        await Follower.updateOne(
            { user: targetUserId },
            { $pull: { followers: currentUserId } }
        );

        res.status(200).json({ message: 'Successfully unfollowed the user.' });
    } catch (error) {
        res.status(500).json({ message: 'Error unfollowing the user.', error: error.message });
    }
});

module.exports= router;