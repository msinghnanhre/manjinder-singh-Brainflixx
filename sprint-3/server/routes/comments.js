const express = require('express')
const router = express.Router();
const videos = require('../data/videos.json')
const fs = require('fs');

router.post('/videos/:videoId', ((req, res) => {
    const { name, comment } = req.body
    if (name && comment) {
        const { videoId } = req.params
            const newComment = {
                name,
                comment,
                likes: 0,
                timestamp: Date.now()
            }
        let found = videos.find(item => item.id === videoId)
        found.comments.push(newComment)
        res.status(200).json(newComment)
    }
    else {
        res.status(400).send("Must have comment and Name properties")
    }     
}));


router.delete('/videos/:videoId/comments/:commentId', ((req, res) => {
    const { videoId, commentId } = req.params
    const selectedVideo = videos.find(video => video.id === videoId)
    const comments = selectedVideo.comments
    const commentIndex = comments.findIndex((comment) => comment.id === commentId)
    const comment = comments[commentIndex]
    comments.splice(commentIndex, 1)
    res.json(comment)  
}))

module.exports = router;