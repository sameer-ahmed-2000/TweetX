require('dotenv').config();

const mongoose=require('mongoose');
const mongoDBURI= process.env.MONGODB_URI;

mongoose.connect(mongoDBURI);

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    fullName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const followerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

const followingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        maxLength: 280
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
    });


const User=mongoose.model('User',userSchema);
const Follower = mongoose.model('Follower', followerSchema);
const Following = mongoose.model('Following', followingSchema);
const Post= mongoose.model('Post',postSchema);

module.exports={User,Follower,Following,Post}