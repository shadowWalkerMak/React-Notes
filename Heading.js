import React from "react"

function Display(props) {
    return (
        <div className="container">
            <div className="row">
                <h1>{props.name}</h1>
                <br/>
                <h2>{props.detail}</h2>
            </div>
        </div>
    )
}
export default Display;