import "./Form.scss"
import userImg from "../../assets/Images/Mohan-muruge.jpg"

function Form({handleChange, handleSubmit, usercomment, name, comments}) {
    return (
        <section className="form-container">
            <h3 className="form-container__title">{comments.length} Comments</h3>      
            <section className="form-section">
                <section className="form-section__img">
                    <img
                        className="form-section__img-user"
                        src={userImg}
                        alt="user Avatar" />
                </section>
                <form
                    className="form"
                    name="comment-form"
                    onSubmit={handleSubmit}
                >
                    <section className="form__split">
                        <label
                            className="form__input-title"
                            htmlFor="usercomment">JOIN THE CONVERSATION
                        </label>
                        <section className="form__input-section">
                            <input
                                className="form__input-value form__input-value--username"
                                placeholder="Enter your Name"
                                type="text"
                                name="name"
                                id="username"
                                value={name}
                                onChange={handleChange}
                            />
                            <textarea
                                placeholder="Write Comment here"
                                className="form__input-value"
                                name="usercomment"
                                id="usercomment"
                                type="text"
                                value={usercomment}
                                onChange={handleChange}
                            >
                            </textarea>
                        </section>
                    </section>
                    <input
                        className="form__btn-comment"
                        type="submit"
                        value="COMMENT"
                    />
                </form>
            </section>
        </section>
    )
}
    
export default Form;