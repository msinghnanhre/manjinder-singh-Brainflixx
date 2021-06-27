const express = require('express')
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const videos = require('../data/videos.json');

let vid = videos


router.get('/videos', ((req, res) => {
    const data = videos.map(item => {
        // if (!item.image) {
        //     item.image = videos[3].image
        // }
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
    const { title, description , channel} = req.body
    const newVideo = {
        id: uuidv4(),
        title,
        channel,
        image: '/images/upload.jpg',
        description,
        views: 1000,
        likes: 500,
        duration: "3",
        timestamp: Date.now(),
        comments: []
    }
        vid.push(newVideo)
        const dataObject = JSON.stringify(vid, null, 2);
        console.log(dataObject)
        fs.writeFile('data/videos.json', dataObject, (err) => {
            console.log(err)
        })
    res.status(200).send(videos)
}))

router.get('/videos/:videoId', ((req, res) => {
    let videoId  = req.params.videoId
    let found = videos.find(item => item.id === videoId)
    if (found) {
        res.status(200).json(found)
    }
    else {
        res.status(400).json(err)
    }
}))

module.exports = router;