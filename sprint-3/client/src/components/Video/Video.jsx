import "./Video.scss";

function Video({defaultVideo}) {
    return (
        <div title="Videos section">
            <section className="container">
                <video className="container__video" poster={defaultVideo.image} controls>
                    <source className="container__video" type="video/mp4" src={defaultVideo.video} />
                </video >
            </section>
        </div>
    )
}

export default Video




