import {Component} from 'react'
import "./VideoList.scss"

class VideoList extends Component {
    
    render() {
        const { list, clickHandler } = this.props;
        return (
            <section className="videolist-wrapper">
                <h3 className="videolist-wrapper__title">NEXT VIDEO</h3>

                {list.map(video => {
                    return ( 
                        <section
                            className="videolist"
                            key={video.id}
                            onClick={() => clickHandler(video.id)}>

                            <div className="videolist__img-container">
                                <img className="videolist__img"
                                    src={video.image}
                                    alt="video Poster" />
                            </div>

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
