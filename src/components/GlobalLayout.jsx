import React from "react"

const outerElementStyles = {
    height: "100vh",
    display: "grid",
    placeContent: "center",
}

const innerElementStyles = {
    height: "85vh",
    width: "85vw",
}

const GlobalLayout = (props) => {
    return (
        <div className="bg-light" style={outerElementStyles}>
            <div className="rounded shadow-sm bg-white" style={innerElementStyles}>
                {props.children}
            </div>
        </div>
    )
}

export default GlobalLayout
