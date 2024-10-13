/**
 * Deletes a comment by its ID.
 *
 * @route DELETE /:id
 * @param {string} id - The ID of the comment to delete.
 * @returns {string} - A message indicating the result of the deletion.
 * @throws {404} - If the comment is not found.
 * @throws {403} - If the user is not the author of the comment.
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

// Hey, I'm a comment

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const comment = await Comment.findById(id);
    if (!comment) {
        return res.status(404).send("Comment not found");
    }
    if (comment.author.toString() !== req.user.id) {
        return res.status(403).send("You are not the author of this comment");
    }
    await comment.delete();
    res.send("Comment deleted");
});
