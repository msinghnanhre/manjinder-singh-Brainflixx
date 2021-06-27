const express = require('express')
const router = express.Router();
const videos = require('../data/videos.json')
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

let vid = videos
//console.log(vid)
router.post("/videos/:videoId", ((req, res) => {
    let id = (req.params.videoId)
    let foundVid = vid.find(video => video.id === id)
    if (req.body.name && req.body.comment) {
        let newObj = {
            name: req.body.name,
            comment: req.body.comment,
            id: uuidv4(),
            timestamp: Date.now(),
            likes: 0
        }
        foundVid.comments.push(newObj)
        const dataObject = JSON.stringify(vid, null, 2);
        fs.writeFile('data/videos.json', dataObject , (err) => {
            console.log(err)
        })
    }
    res.send(foundVid.comments)
}))


router.delete('/videos/:videoId/comments/:commentId', ((req, res) => {
    const { videoId, commentId } = req.params
    const selectedVideo = vid.find(video => video.id === videoId)
    const comments = selectedVideo.comments
    const commentIndex = comments.findIndex((comment) => comment.id === commentId)
    const comment = comments[commentIndex]
    comments.splice(commentIndex, 1)
    const dataObject = JSON.stringify(vid, null, 2);
    fs.writeFile('data/videos.json', dataObject, (err) => {
        console.log(err)
    })
    res.json(comment)  
}))

module.exports = router;