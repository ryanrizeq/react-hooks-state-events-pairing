import React, {useState} from "react";

function Header({ title, views, date, upvotes, downvotes }) {
    const [numUpvotes, setNumUpvotes] = useState(upvotes)
    const [numDownvotes, setNumDownvotes] = useState(downvotes)

    function handleUpvotes () {
        setNumUpvotes(numUpvotes + 1)
    }

    function handleDownvotes () {
        setNumDownvotes(numDownvotes + 1)
    }

    return (
        <div>
            <h1>{title}</h1>
            <p>{views} Views | Uploaded {date}</p>
            <button onClick={handleUpvotes}>{numUpvotes} 👍</button>
            <button onClick={handleDownvotes}>{numDownvotes} 👍</button>
        </div>
    )
}

export default Header