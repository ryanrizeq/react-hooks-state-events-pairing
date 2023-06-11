import React, { useState } from "react";
import CommentsToggle from "./CommentsToggle";

function Comments({ comments }) {

    const [commentsHidden, setCommentsHidden] = useState(false)

    function handleClick() {
        setCommentsHidden(!commentsHidden)
    }

    return (
        <div>
            {commentsHidden ? <button onClick={handleClick}>Show Comments</button> : (
                <div>
                    <button onClick={handleClick}>Hide Comments</button>
                    <CommentsToggle comments={comments}/>
                </div>
            )}
        </div>
    )
}

export default Comments