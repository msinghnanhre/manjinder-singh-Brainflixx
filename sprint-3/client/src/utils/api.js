import axios from "axios";
const URL = 'https://brainflix-project.herokuapp.com/'

//get all videos
export const getVideos = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`${URL}api/videos`
            )
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
        })
    })
}


//get video from Id
export const getVideoFromId = (id) => {
    return new Promise((resolve, reject) => {
        axios.get(`${URL}api/videos/${id}`)
            .then(res => {
            resolve(res)
            })
            .catch(err => {
            reject(err)
        })
    })
}

//delete a comment from video Id and comment Id
export const deleteComment = (videoId, commentId) => {
    return new Promise((resolve, reject) => {
        axios.delete(`${URL}api/videos/${videoId}/comments/${commentId}`)
            .then(res => [
            resolve(res)
            ])
            .catch(err => {
            reject(err)
        })
    })
}

