import React from "react";

function CommentsToggle({ comments }) {
    return (
        <div>
            <h3>{comments.length} Comments</h3>
            {comments.map((comment) => {
                return (
                    <div>
                        <h4>{comment.user}</h4>
                        <p>{comment.comment}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default CommentsToggle