import React from 'react'
import "./Form.scss"
import userImg from "../../assets/Images/Mohan-muruge.jpg"

export default function Form(props) {
    return (
        <section className="form-container">
            <h3 className="form-container__title">3 Comments</h3>      
            <section className="form-section">
                <section className="form-section__img">
                    <img className="form-section__img-user"
                        src={userImg}
                        alt="user Avatar" />
                </section>
                <form className="form">
                    <section className="form__split">
                        <label className="form__input-title"
                            htmlFor="usercomment">JOIN THE CONVERSATION
                        </label>
                        <textarea className="form__input-value"
                            name="usercomment"
                            id="usercomment"
                            type="text"
                            placeholder="Write Comment here" >
                        </textarea>
                    </section>
                    <input className="form__btn-comment"
                        type="submit"
                        value="COMMENT"
                    />
                </form>
            </section>
        </section>
    )
}
    
