import "./Video.scss";


function Video({video}){
    return (
        <section className="container">
            <video className="container__video"  controls poster={video.image} >
                <source className="container__video" type="video/mp4" src={video.video}/>
            </video >
        </section>
    )
}

export default Video

