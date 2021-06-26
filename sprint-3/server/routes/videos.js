const express = require('express')
const router = express.Router();
// const {uuid: v4} = require('uuid').v
//get videos from videos.json
const videos = require('../data/videos.json');

router.get('/videos', ((req, res) => {
    const data = videos.map(item => {
        if (!item.image) {
            item.image = videos[3].image
        }
        return {
            id: item.id,
            title: item.title,
            channel: item.channel,
            video: item.video,
            image: item.image
        }

    })
    res.status(200).json(data)
}));

router.post('/videos', ((req, res) => {
    const { title, description } = req.body
    const newVideo = {
        channel: "somehtin",
        title,
        id: "temp",
        likes: 0,
        views: 0,
        imageg: '',
        description
    }
    videos.push(newVideo)
    res.status(200).send(videos)
}))

router.get('/videos/:videoId', ((req, res) => {
    let videoIds  = req.params.videoId
    let found = videos.find(item => item.id === videoIds)
    res.status(200).json(found)
}))

module.exports = router;