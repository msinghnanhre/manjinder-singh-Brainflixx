import axios from "axios";
export const API_KEY = "?api_key=d4b3f737-5c05-4518-bc7d-a16cf0bb6335";
export const URL = "https://project-2-api.herokuapp.com/"


//get all videos
export const getVideos = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`https://project-2-api.herokuapp.com/videos${API_KEY}`
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
        axios.get(`https://project-2-api.herokuapp.com/videos/${id}${API_KEY}`)
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
        axios.delete(`${URL}videos/${videoId}/comments/${commentId}${API_KEY}`)
            .then(res => [
            resolve(res)
            ])
            .catch(err => {
            reject(err)
        })
    })
}
