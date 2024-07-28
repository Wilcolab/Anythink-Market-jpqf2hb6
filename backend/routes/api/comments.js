const router = require("express").Router();
const mongoose = require("mongoose");

const Comment = mongoose.model("Comment");

/**
 * Express router for handling comments API requests.
 * @module routes/api/comments
 */

module.exports = router;

/**
 * Route for getting all comments.
 * @name GET /api/comments
 * @function
 * @async
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} - JSON response containing all comments
 */
router.get("/", async (req, res) => {
    const comments = await Comment.find();
    res.json(comments);
});

/**
 * Route for creating a new comment.
 * @name POST /api/comments
 * @function
 * @async
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} - JSON response containing the newly created comment
 */
router.post("/", async (req, res) => {
    const { body } = req;
    const comment = new Comment(body);
    await comment.save();
    res.json(comment);
});

/**
 * Route for updating a comment by ID.
 * @name PUT /api/comments/:id
 * @function
 * @async
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} - JSON response containing the updated comment
 */
router.put("/:id", async (req, res) => {
    const { body, params } = req;
    const comment = await Comment.findByIdAndUpdate(params.id, body, { new: true });
    res.json(comment);
});

/**
 * Route for deleting a comment by ID.
 * @name DELETE /api/comments/:id
 * @function
 * @async
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} - JSON response with a message indicating the comment has been deleted
 */
router.delete("/:id", async (req, res) => {
    const { params } = req;
    await Comment.findByIdAndDelete(params.id);
    res.json({ message: "Comment deleted" });
});
