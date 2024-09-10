// Create web server
// Load express
const express = require('express');
// Create express app
const app = express();
// Create express router
const commentsRouter = express.Router();
// Load comment controller
const commentsController = require('../controllers/commentsController');
// Load comment model
const Comment = require('../models/comment');
// Load post model
const Post = require('../models/post');

// Create a new comment
commentsRouter.post('/', commentsController.create);

// Read all comments
commentsRouter.get('/', commentsController.readAll);

// Read a comment by id
commentsRouter.get('/:id', commentsController.read);

// Update a comment by id
commentsRouter.put('/:id', commentsController.update);

// Delete a comment by id
commentsRouter.delete('/:id', commentsController.delete);

// Load comments router
module.exports