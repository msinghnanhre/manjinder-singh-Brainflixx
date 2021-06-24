import React, { Component } from 'react'
import "./VideoDetail.scss"


export default class VideoDetail extends Component {
    
    render() {
        const {videoDetail} = this.props
        let datetime = new Date(videoDetail.timestamp).toLocaleDateString("en-us", { day: "2-digit", month: "2-digit", year: "numeric" })
        return (
            <div className="video-detail">
                <section className="video-detail__top">
                    <h1 className="video-detail__title">{videoDetail.title}</h1>
                    <section className="video-detail__social">
                        <div className="video-detail__left">
                            <span className="video-detail__channel">By {videoDetail.channel}</span>
                            <span className="video-detail__timestamp">{datetime}</span>
                        </div>
                        <div className="video-detail__right">
                            <span className="video-detail__views">{videoDetail.views}</span>
                            <span className="video-detail__likes">{videoDetail.likes}</span>
                        </div>
                    </section>
                </section>
                <section className="video-detail__bottom">
                    <p>{videoDetail.description}</p>
                </section>           
            </div>
        )
    }
}

