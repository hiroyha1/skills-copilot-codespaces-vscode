// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

// Import controllers
const commentsController = require('../controllers/comments');

// Import models
const Comment = require('../models/comment');

// Import middleware
const isAuth = require('../middleware/is-auth');
const isCommentAuthor = require('../middleware/is-comment-author');

// GET /comments
router.get('/', commentsController.getComments);

// POST /comments
router.post(
  '/',
  isAuth,
  [
    body('content')
      .trim()
      .isLength({ min: 1 })
      .withMessage('Comment must be at least 1 character long')
      .isLength({ max: 500 })
      .withMessage('Comment cannot exceed 500 characters'),
  ],
  commentsController.postComment
);

// DELETE /comments/:commentId
router.delete('/:commentId', isAuth, isCommentAuthor, commentsController.deleteComment);

// PUT /comments/:commentId
router.put(
  '/:commentId',
  isAuth,
  isCommentAuthor,
  [
    body('content')
      .trim()
      .isLength({ min: 1 })
      .withMessage('Comment must be at least 1 character long')
      .isLength({ max: 500 })
      .withMessage('Comment cannot exceed 500 characters'),
  ],
  commentsController.putComment
);

// Export router
module.exports = router;