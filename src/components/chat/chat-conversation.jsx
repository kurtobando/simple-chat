import React from "react"
import ChatConversationOthers from "./chat-conversation-others"
import ChatConversationMine from "./chat-conversation-mine"
import ChatConversationTyping from "./chat-conversation-typing"
import ChatConversationHasJoin from "./chat-conversation-has-join"
import ChatConversationHasLeft from "./chat-conversation-has-left"

const ChatConversation = ({ conversation = [], currentUser = {} }) => {
    const mapConversation = conversation.map((convo) => {
        const { id, is_archive, is_sent, is_conversation, text, timestamp, user } = convo

        if (is_conversation) {
            if (user.id === currentUser.id) {
                return (
                    <ChatConversationMine
                        key={timestamp}
                        id={id}
                        text={text}
                        isSent={is_sent}
                        isArchive={is_archive}
                        time={timestamp}
                        user={user}
                    />
                )
            }
            return (
                <ChatConversationOthers
                    key={timestamp}
                    id={id}
                    text={text}
                    isSent={is_sent}
                    isArchive={is_archive}
                    time={timestamp}
                    user={user}
                />
            )
        }
        if (!is_conversation) {
            if (text === "HAS_JOIN_CHAT") {
                return <ChatConversationHasJoin key={timestamp} username={user.name} />
            }
            if (text === "HAS_LEFT_CHAT") {
                return <ChatConversationHasLeft key={timestamp} username={user.name} />
            }
        }
        return false
    })
    return (
        <div className=" col-10 bg-light overflow-auto" style={{ maxHeight: "60vh" }}>
            {mapConversation}
            <ChatConversationTyping />
        </div>
    )
}

export default ChatConversation
