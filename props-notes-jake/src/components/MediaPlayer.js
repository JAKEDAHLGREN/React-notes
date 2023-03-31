import React from "react";


const MediaPlayer = (props) => {
    // console.log(props) this tests to see if you have a string and behavior in MediaPlayer props
    // console.log("props:", props) this will test if current episode is being populated on live server
    return (
        <div>
            <h3> Current episode{props.currentEpisode}</h3>
            <button onClick={props.triggerNextEpisode}>Play Next Episode</button>
        </div>
    )
}

export default MediaPlayer