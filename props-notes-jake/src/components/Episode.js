import React from "react"

const Episode = (props) => {
    console.log(props.title)
    // below is the jsq return
    return (
        <>
        {/* you need to create a name for your div tag, and class is specific to js, so you can use className in jsx */}
        <div className="card">Episode: {props.title}</div>

        </>
    )
}

export default Episode