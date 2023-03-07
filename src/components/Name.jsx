import React from "react";

function Name(props) {
    return (
        <div>
            <dt className="dt span">
                <span>{props.name}</span>
            </dt>
        </div>
    )
}

export default Name;