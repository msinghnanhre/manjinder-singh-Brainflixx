import uploadIcon from "../../assets/Images/Upload-video-preview.jpg"
import "./Upload.scss";

const Upload = ({history}) => {
    const onPublish = () => {
        history.push("/")
        alert("Video has been Uploaded")
    }
        return (
            <section className="upload">
                <h2 className="upload__title">Upload Video</h2>
                <section className="upload-section">
                
                    <section className="upload-section__left">
                        <h4 className="upload-section__left-title">VIDEO THUMBNAIL</h4>
                        <img src={uploadIcon} alt="Upload Icon" />
                    </section>
            
                    <form className="upload-section__right">
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
                    </form>
                </section>
                <section className="upload__btn">
                    <button className="upload__btn-publish" onClick = {onPublish}>PUBLISH</button>
                    <button className="upload__btn-cancel" >CANCEL</button>
                </section>
            </section>
        )
}

export default Upload