const express = require('express')
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const videos = require('../data/videos.json');

let videoCopy = videos


router.get('/videos', ((req, res) => {
    const data = videos.map(item => {
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
        views: "1000",
        likes: "59500",
        duration: "3",
        timestamp: Date.now(),
        comments: []
    }
    if (newVideo) {
        videoCopy.push(newVideo)
        const dataObject = JSON.stringify(videoCopy, null, 2);
        //write to json file
        writeToFile(dataObject)
        res.status(200).send(videos)
    }
    else {
        res.status(400).send(err)
    }

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

router.put('/videos/:videoId/likes', ((req, res) => {
    let videoId = req.params.videoId
    let found = videoCopy.find(item => item.id === videoId)
    if (found) {
        let numberOfLikes = found.likes

        //convert to desired format to edit and back to json before saving to file
        let newLikes = Number(numberOfLikes.replace(",", "")) + 1
        const formattedLikes = newLikes.toString().split("")

        const insert = formattedLikes.splice(3, 0, ",").join("")
        const joined = formattedLikes.join("")

        found.likes = joined
        const dataObject = JSON.stringify(videoCopy, null, 2);
        //write to json file
        writeToFile(dataObject)

        res.status(201).json(found)
    } else {
        res.status(400).json(err)
    }
}))

module.exports = router;

function writeToFile(data) {
    fs.writeFile('data/videos.json', data, (err) => {
        if (!err) {
            console.log("File written Successfully")
        } else {
            console.log(err)
        }
    })
}


