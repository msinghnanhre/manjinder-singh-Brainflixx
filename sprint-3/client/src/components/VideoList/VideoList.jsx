import {Component} from 'react'
import { Link } from "react-router-dom"
import { getVideos } from "../../utils/api.js"
import "./VideoList.scss"

class VideoList extends Component {
    state = {
        list: [],
    }

    //help[er function to filter out the video from list of videos based on ID
    filterVideoListById(videoId) {
        getVideos()
            .then(res => {
                if ((this.props.match.url === "/") || (this.props.match.url === `/video/${res.data[0].id}`)) {
                    let [first, ...rest] = res.data
                    this.setState({ list: rest })
                }
                else {
                    let newList = res.data.filter(item => item.id !== videoId)
                    this.setState({ list: newList })
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    //initial mounting stage remove first Video from Video List  
    componentDidMount() {
        getVideos()
            .then(res => {
                this.filterVideoListById(res.data[0].id)
            }) 
    }

    //helper function to evaluate condition in update component
    updateList(id) {
        let videoIdArray = this.state.list.map(item => (item.id))
        if (videoIdArray.indexOf(id) !== -1) {
            return true
        }
        return false
    }
     
    componentDidUpdate(prevProps) {
        let homeId = localStorage.getItem("homePageId")
        let { id } = this.props.match.params

        if (id === undefined && prevProps.match.url !== "/") {
            this.filterVideoListById(homeId)
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });   
        }
        else if (this.updateList(id)) {
            this.filterVideoListById(id)
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }

    render() {
        return (
            this.state.list === [] ?
              <main>Loading...</main>
            :
            <section className="videolist-wrapper" title="Display List of videos">
                <h3 className="videolist-wrapper__title">NEXT VIDEO</h3>
                {this.state.list.map(video => {
                    return ( 
                        <section className="videolist" key={video.id}>
                            <Link to={`/videos/${video.id}`} >
                            <div className="videolist__img-container">
                                    <img className="videolist__img"
                                    src={video.image}
                                    alt="video Poster" />
                            </div>
                            </Link>
                            <section className="videolist__description">
                                <h4 className="videolist__title" >
                                    {video.title}
                                </h4>
                                <span className="videolist__channel">
                                    {video.channel}
                                </span>
                            </section>
                        </section>
                    )         
                })}
            </section>
        )
    }
}

export default VideoList
