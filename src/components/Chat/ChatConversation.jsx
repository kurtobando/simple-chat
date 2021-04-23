import React, { useEffect } from "react"
import ChatConversationOthers from "./ChatConversationOthers"
import ChatConversationMine from "./ChatConversationMine"
import ChatConversationTyping from "./ChatConversationTyping"
import ChatConversationHasJoin from "./ChatConversationHasJoin"
import ChatConversationHasLeft from "./ChatConversationHasLeft"

const ChatConversation = (props) => {
    const { conversation = [], currentUser = {}, state = {} } = props

    useEffect(() => {
        const chatConversationElement = document.getElementById("chat-conversation")
        chatConversationElement.scrollTop = chatConversationElement.scrollHeight
    }, [conversation.length, state.typingUser.length])

    const mapConversation = conversation.map((message) => {
        const { id, is_archive, is_sent, is_conversation, text, timestamp, user } = message

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
    const mapTypingUsers = state.typingUser.map((name) => {
        return <ChatConversationTyping username={name} />
    })

    return (
        <div className=" col-10 bg-light overflow-auto" style={{ maxHeight: "60vh" }} id="chat-conversation">
            {mapConversation}
            {mapTypingUsers}
        </div>
    )
}

export default ChatConversation
