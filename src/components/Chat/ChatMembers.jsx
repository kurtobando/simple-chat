import React from "react"

const ChatMembers = () => {
    return (
        <div className=" col-2 bg-light">
            <div
                className="bg-white rounded-circle border m-1 small d-flex flex-row justify-content-center align-items-center"
                style={{ height: "60px", width: "60px" }}>
                Avatar
            </div>
            <div
                className="bg-white rounded-circle border m-1 small d-flex flex-row justify-content-center align-items-center"
                style={{ height: "60px", width: "60px" }}>
                Avatar
            </div>
            <div
                className="bg-white rounded-circle border m-1 small d-flex flex-row justify-content-center align-items-center"
                style={{ height: "60px", width: "60px" }}>
                Avatar
            </div>
        </div>
    )
}

export default ChatMembers
