import React from "react"
import moment from "moment"

const ChatConversationOthers = ({ id, text, isArchive, isSent, time }) => {
    const parseTime = new Date(time).toISOString()
    const parseTimeNow = moment(parseTime).fromNow()

    if (isArchive) {
        return <div className="bg-primary rounded m-2 p-2 text-white shadow-sm">[deleted]</div>
    }
    return (
        <div className="bg-primary rounded m-2 p-2 text-white shadow-sm">
            <div className="d-flex justify-content-between">
                <div>{text}</div>
                <div className="small ">
                    {isSent ? "~" : "!"}
                    {parseTimeNow}
                </div>
            </div>
        </div>
    )
}

export default ChatConversationOthers
