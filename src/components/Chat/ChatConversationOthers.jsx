import React from "react"
import moment from "moment"

const ChatConversationOthers = ({ id, text, isArchive, isSent, time, user }) => {
    const parseTime = new Date(time).toISOString()
    const parseTimeNow = moment(parseTime).fromNow()
    const { name } = user
    const imageSource = `https://avatars.dicebear.com/api/human/${name}.svg`

    if (isArchive) {
        return <div className="bg-primary rounded m-2 p-2 text-white shadow-sm">[deleted]</div>
    }
    return (
        <div className="d-flex">
            <img
                src={imageSource}
                alt={name}
                className="d-block mt-2 mb-2 ml-2"
                style={{ width: "40px", height: "40px" }}
            />
            <div className="bg-primary rounded m-2 p-2 text-white shadow-sm flex-grow-1">
                <div className="d-flex justify-content-between">
                    <div>{text}</div>
                    <div className="small ">
                        {isSent ? "~" : "!"}
                        {parseTimeNow}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatConversationOthers
