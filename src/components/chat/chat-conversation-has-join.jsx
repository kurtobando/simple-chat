import React from "react"

const ChatConversationHasJoin = ({ username = null }) => {
    return <div className="text-center text-info small m-2">{`${username}`} has join the chat ...</div>
}

export default ChatConversationHasJoin
