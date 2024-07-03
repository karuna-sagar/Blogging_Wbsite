const Like = require('../models/Like');
const Post = require('../models/Post');
const asyncHandler = require("express-async-handler");

// Handle liking a post
exports.likePost = asyncHandler(async (req, res) => {
    const postId = req.params.postId;
    const userId = req.user._id;

    // Check if the user has already liked the post
    const existingLike = await Like.findOne({ post: postId, user: userId });
    if (existingLike) {
        return res.status(400).json({ message: 'You have already liked this post.' });
    }

    // Create a new like
    const like = new Like({
        user: userId,
        post: postId
    });

    await like.save();

    // Update the Post model to add this like
    const post = await Post.findById(postId);
    post.likes.push(like._id);
    await post.save();

    res.status(201).json({ message: 'Post liked successfully.', like });
});

// Handle unliking a post
exports.unlikePost = asyncHandler(async (req, res) => {
    const postId = req.params.postId;
    const userId = req.user._id;

    // Find and delete the like
    const like = await Like.findOneAndDelete({ post: postId, user: userId });
    if (!like) {
        return res.status(404).json({ message: 'Like not found.' });
    }

    // Update the Post model to remove this like
    const post = await Post.findById(postId);
    post.likes = post.likes.filter(likeId => likeId.toString() !== like._id.toString());
    await post.save();

    res.json({ message: 'Post unliked successfully.' });
});
