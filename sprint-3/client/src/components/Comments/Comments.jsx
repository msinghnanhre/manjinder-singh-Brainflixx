import "./Comments.scss";
import { Component } from "react"

class Comments extends Component {
    render() {
        if (this.props.comments === null) {
            return <main>Loading...</main>
        }
        return (
            <>
                {
                    this.props.videoDetail.comments.reverse().map(comment => {
                        let datetime = new Date(comment.timestamp).toLocaleDateString("en-us", { day: "2-digit", month: "2-digit", year: "numeric" })

                        return (
                            <article className="comment" key={comment.id} title="Comments">
                                <div className="comment__avatar">
                                </div>
                                <section className="comment__container">
                                    <section className="comment__name-date">
                                        <h3 className="comment__name">{comment.name}</h3>
                                        <span className="comment__date">{datetime}</span>
                                    </section>
                                    <p className="comment__text">{comment.comment}
                                    </p>
                                    <button className="comment__delete"
                                        onClick={() => this.props.clickHandler(comment.id)}
                                    >Delete
                                    </button>
                                </section>
                            </article>
                        )
                    })
                }
            </>
        )
    }
}

export default Comments
