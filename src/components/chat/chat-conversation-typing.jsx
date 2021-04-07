import React from "react"

const ChatConversationTyping = ({ username = null }) => {
    return <div className="text-center text-info small m-2">{`${username}`} is typing ...</div>
}

export default ChatConversationTyping
