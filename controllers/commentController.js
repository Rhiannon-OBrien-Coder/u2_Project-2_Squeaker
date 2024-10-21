const Comment = require('../models');

const getComments = async (req, res) => {
    try {
        const comment = await Comment.find()
        res.json(comment)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getCommentBySqueak = async (req, res) => {
    try { 
        const comment = await Comment.find( {'squeak': req.params.squeak})
        console.log(comment)
        if (comment) {
            return res.json(comment);
        }
        return res.status(404).send('Comment not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
  }

const getCommentById = async (req, res) => {
    try {
        const { id } = req.params;
        const comment = await Comment.findById(id)
        if (comment) {
            return res.json(comment);
        }
        return res.status(404).send('Comment with the specified ID does not exist');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createComment = async (req, res) => {
    try {
        const comment = await new Comment(req.body)
        await comment.save()
        return res.status(201).json({
            comment,
        });
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Comment.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Comment deleted");
        }
        throw new Error("Comment not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateComment = async (req, res) => {
    try {
        let { id } = req.params;
        let comment = await Comment.findByIdAndUpdate(id, req.body, { new: true })
        if (comment) {
            return res.status(200).json(comment)
        }
        throw new Error("Comment not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getComments,
    getCommentBySqueak,
    getCommentById,
    createComment,
    deleteComment,
    updateComment
}