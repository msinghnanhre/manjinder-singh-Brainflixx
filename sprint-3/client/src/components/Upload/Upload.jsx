import uploadIcon from "../../assets/Images/Upload-video-preview.jpg"
import "./Upload.scss";
import axios from "axios";

const Upload = ({history}) => {
    const onPublish = () => {

    }

    const uploadVideo = (e) => {
        e.preventDefault()
        const newVideo = {
            title: e.target.title.value,
            description: e.target.description.value
        }

        axios.post(`http://localhost:8080/api/videos`,
            newVideo).then(res => {
            console.log(res)
            }).catch(err => {
            console.log(err)
            })
        history.push("/")
        alert("Video Uploaded")
        // console.log(newVideo)
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
                        />
                        <label className="upload-section__label"
                            htmlFor="description">ADD A VIDEO DESCRIPTION
                            </label>
                        <textarea className="upload-section__input upload-section__input--height"
                            name="description"
                            id="description"
                            
                            type="text"
                            placeholder="Add a description of your video" >
                        </textarea>
                        <section className="upload__btn">
                            <input className="upload__btn-publish" type="submit" value="PUBLISH" onClick={onPublish} />
                            <button className="upload__btn-cancel" type="button" onClick={handleClick} >CANCEL</button>
                        </section>
                    </form>
                </section>

            </section>
        )
}

export default Upload