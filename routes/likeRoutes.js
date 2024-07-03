const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likeController');
const { ensureAuthenticated } = require("../middlewares/auth");

// POST route to like a post
router.post('/:postId/like', ensureAuthenticated, likeController.likePost);

// DELETE route to unlike a post
router.delete('/:postId/unlike', ensureAuthenticated, likeController.unlikePost);

module.exports = router;
