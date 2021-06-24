import "./Comments.scss";

function Comments({commentList}) {
    return (
        <>
            {
                commentList.comments.map(comment => {
                    let datetime = new Date(comment.timestamp).toLocaleDateString("en-us", { day: "2-digit", month: "2-digit", year: "numeric" })
                    return (
                        <article className="comment" key={comment.id}>
                            <div className="comment__avatar">
                            </div>
                            <section className="comment__container">
                                <section className="comment__name-date">
                                    <h3 className="comment__name">{comment.name}</h3>
                                    <span className="comment__date">{datetime}</span>
                                </section>
                                <p className="comment__text">{comment.comment}
                                </p>
                            </section>
                        </article>
                    )
                })
            }  
        </>
    )
}

export default Comments
