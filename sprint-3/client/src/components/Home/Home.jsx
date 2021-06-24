import Video from "../Video/Video"
import VideoDetail from "../VideoDetail/VideoDetail"
import VideoList from "../VideoList/VideoList"
import "./Home.scss";
import { getVideos, getVideoFromId, deleteComment} from "../../utils/api.js"
import { Component } from 'react'
import axios from "axios";



export default class Home extends Component {
    state = {
        defaultVideo: null,
        isMounted: null,
        usercomment: "",
        name: ""
    }

    //function to make requests for videos
    getVideo(videoId) {
        getVideoFromId(videoId)
            .then(res => {
                this.setState(
                    {
                        isMounted: true,
                        defaultVideo: res.data,
                    })
                })
            .catch(err => {
                console.log(err)
            })
    }

    //mounts the first video in list as default video 
    componentDidMount = () => {
        getVideos()
            .then(res => {
                if ((this.state.isMounted === null) && (this.props.match.url !== "/")) {
                    const id = this.props.match.params.id
                    this.getVideo(id)
                    localStorage.setItem("homePageId", res.data[0].id)
                    
                }
                else {
                    this.getVideo(res.data[0].id)
                    localStorage.setItem("homePageId", res.data[0].id)
                }
            })   
    }


    //filter out video and display it as defautl vidoe
    componentDidUpdate = (prevProps) => {
        const homeId = localStorage.getItem("homePageId")
        const { id } = this.props.match.params;

        if ((id !== prevProps.match.params.id) && (this.props.match.url !== "/")) {
            this.getVideo(id)
        }
        else if (homeId !== this.state.defaultVideo.id && this.props.match.url === "/") {
            this.getVideo(homeId)
        }
    }
    
    //click handler for comment delete functionality
    clickHandler = (commentId) => {
        const { id: videoId } = this.state.defaultVideo
        deleteComment(videoId, commentId)
            .then(res => {
                this.getVideo(videoId)
            })
            .catch(err => console.log(err))
    }

    //add comments fucntions
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    //add new comment 
    handleSubmit = (event) => {
        const { id } = this.state.defaultVideo
        this.state.usercomment !== "" || this.state.name === "" ?
            axios.post(`http://localhost:8080/api/videos/${id}/comments`,
            {
                name: this.state.name,
                comment: this.state.usercomment
            }).then(res => {
                this.getVideo(id)
                this.setState({
                    usercomment: "",
                    name: ""
                })
            })
            .catch(err => {
                console.log(err)
            }
            ) :
            alert("Enter Name and comment")
        event.preventDefault()
    }

    render() {
        const { defaultVideo, usercomment, name } = this.state
        const { match } = this.props
        
        return (
            defaultVideo === null ?
              <main>Loading...</main>
            :
            <div className="main" title="HomePage">
                <div className="main__top">
                    <Video
                        defaultVideo={defaultVideo}
                    />
                </div>
                <div className="main__bottom">
                    <div className="main__bottom-right">
                        <VideoDetail
                            videoDetail={defaultVideo}
                            name={name}
                            usercomment={usercomment}
                            match={match}
                            clickHandler={this.clickHandler}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                        />
                    </div>

                    <div className="main__bottom-left">
                        <VideoList
                            match={match}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
