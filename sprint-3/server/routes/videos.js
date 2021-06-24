const express = require('express')
const router = express.Router();

//get videos from videos.json
const videos = require('../data/videos.json');

router.get('/videos', ((req, res) => {
    const data = videos.map(item => {
        return {
            id: item.id,
            title: item.title,
            channel: item.channel,
            video: item.video, image: item.image
        }
    })
    res.status(200).json(data)
}));

router.get('/videos/:videoId', ((req, res) => {
    let videoIds  = req.params.videoId
    let found = videos.find(item => item.id === videoIds)
    res.status(200).json(found)
}))

module.exports = router;