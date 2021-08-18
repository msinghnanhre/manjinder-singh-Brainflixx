import uploadIcon from "../../assets/Images/Upload-video-preview.jpg"
import "./Upload.scss";
import axios from "axios";
import {URL} from "../../utils/api.js"

const Upload = ({history}) => {

    const uploadVideo = (e) => {
        e.preventDefault()
        const newVideo = {
            title: e.target.title.value,
            channel: e.target.channel.value,
            description: e.target.description.value
        }

        axios.post(`${URL}api/videos`,
            newVideo).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        history.push("/")
        alert("Video Uploaded")
    }

    const handleClick = () => {
        history.push("/")
     }
        return (
            <section className="upload" title="Upload Page">
                <h2 className="upload__title">Upload Video</h2>
                <section className="upload-section">
                
                    <section className="upload-section__left">
                        <h4 className="upload-section__left-title">VIDEO THUMBNAIL</h4>
                        <img src={uploadIcon} alt="Upload Icon" />
                    </section>
            
                    <form className="upload-section__right" onSubmit={uploadVideo}>
                        <label className="upload-section__label"
                            htmlFor="title">TITLE YOUR VIDEO
                        </label>
                        <input className="upload-section__input"
                            name="title"
                            id="title"
                            type="text"
                            placeholder="Write Comment here"
                            required
                        />
                        <label className="upload-section__label"
                            htmlFor="channel">ADD CHANNEL NAME
                        </label>
                        <input className="upload-section__input"
                            name="channel"
                            id="channel"
                            type="text"
                            placeholder="Enter Channel Name"
                            required
                        />
                        <label className="upload-section__label"
                            htmlFor="description">ADD A VIDEO DESCRIPTION
                            </label>
                        <textarea className="upload-section__input upload-section__input--height"
                            name="description"
                            id="description"
                            type="text"
                            placeholder="Add a description of your video"
                            required >
                        </textarea>
                        <section className="upload__btn">
                            <input className="upload__btn-publish" type="submit" value="PUBLISH" />
                            <button className="upload__btn-cancel" type="button" onClick={handleClick} >CANCEL</button>
                        </section>
                    </form>
                </section>

            </section>
        )
}

export default Upload