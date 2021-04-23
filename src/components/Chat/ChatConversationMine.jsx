import React from "react"
import moment from "moment"

const ChatConversationMine = ({ id, text, isArchive, isSent, time }) => {
    const parseTime = new Date(time).toISOString()
    const parseTimeNow = moment(parseTime).fromNow()

    if (isArchive) {
        return <div className="bg-light rounded m-2 p-2 shadow-sm">[deleted]</div>
    }
    return (
        <div className="bg-light rounded m-2 p-2 shadow-sm">
            <div className="d-flex justify-content-between">
                <div>{text}</div>
                <div className="small text-muted">
                    {isSent ? "~" : "!"}
                    {parseTimeNow}
                </div>
            </div>
        </div>
    )
}

export default ChatConversationMine
