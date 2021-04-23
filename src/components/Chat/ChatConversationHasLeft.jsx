import React from "react"

const ChatConversationHasLeft = ({ username = null }) => {
    return <div className="text-center text-info small m-2">{`${username}`} has left the chat ...</div>
}

export default ChatConversationHasLeft
