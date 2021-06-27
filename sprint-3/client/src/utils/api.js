import axios from "axios";

//get all videos
export const getVideos = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`http://localhost:8080/api/videos`
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
        axios.get(`http://localhost:8080/api/videos/${id}`)
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
        axios.delete(`http://localhost:8080/api/videos/${videoId}/comments/${commentId}`)
            .then(res => [
            resolve(res)
            ])
            .catch(err => {
            reject(err)
        })
    })
}

