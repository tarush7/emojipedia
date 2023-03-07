import React from "react";
import Emoji from "./Emoji";
import Meaning from "./Meaning";
import Name from "./Name";

function Entry(props) {
    return (
        <div className="term">
            <Emoji emoji={props.emoji}/>
            <Name  name={props.name}/>
            <Meaning meaning={props.meaning}/>
        </div>
    )
}

export default Entry;