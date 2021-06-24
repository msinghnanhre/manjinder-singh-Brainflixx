import Comments from "../Comments/Comments"
import Form from "../Form/Form"
import "./VideoDetail.scss"

function VideoDetail({ videoDetail, clickHandler, match, handleChange, handleSubmit, usercomment, name }) {
    let datetime = new Date(videoDetail.timestamp).toLocaleDateString("en-us", { day: "2-digit", month: "2-digit", year: "numeric" })

    return (
        videoDetail === null ?
            <main>Loading...</main>
            :
        <>
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
            <Form
                comments = {videoDetail.comments}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                usercomment={usercomment}
                name={name}
            />
            <Comments videoDetail={videoDetail}
                clickHandler={clickHandler}
                match={match}
            />
        </>
    )
}

export default VideoDetail
