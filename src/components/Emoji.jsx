import React from "react";

function Emoji(props) {
    return (
        <div>
            <dt className="dt">
                <span span className="emoji" role="img" aria-label="Tense Biceps">{props.emoji}</span>
            </dt>
        </div>
    )
}

export default Emoji;