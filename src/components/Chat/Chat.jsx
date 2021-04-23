import React from "react"
import chatGenerateUser from "./_chat-generate-user"
import ChatConversation from "./ChatConversation"
import ChatMembers from "./ChatMembers"
import ChatForm from "./ChatForm"
import ChatButtonLeave from "./ChatButtonLeave"
import ChatSocketIO from "./_chat-socket-io"
import hasJoinChat from "./_has-join-chat"
import hasLeftChat from "./_has-left-chat"
import hasSendMessage from "./_has-send-message"
import hasReceivedMessage from "./_has-received-message"
import hasTypingMessageOn from "./_has-typing-message-on"
import hasTypingMessageOff from "./_has-typing-message-off"

class Chat extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            currentUser: {},
            typingUser: [],
        }
        this.chat = new ChatSocketIO()
        this.hasJoinChat = hasJoinChat.bind(this)
        this.hasLeftChat = hasLeftChat.bind(this)
        this.hasSendMessage = hasSendMessage.bind(this)
        this.hasReceivedMessage = hasReceivedMessage.bind(this)
        this.hasTypingMessageOn = hasTypingMessageOn.bind(this)
        this.hasTypingMessageOff = hasTypingMessageOff.bind(this)
    }
    componentDidMount() {
        this.setState(
            {
                data: [],
                currentUser: {
                    id: chatGenerateUser.id,
                    name: chatGenerateUser.name,
                },
            },
            () => {
                this.chat.setUser(this.state.currentUser)
                this.chat.userConnected().emit()
            }
        )
        this.chat.connect()
        this.chat.connect_error()
        this.chat.userConnected().listen((data) => {
            this.hasJoinChat(data)
        })
        this.chat.userDisConnected().listen((data) => {
            this.hasLeftChat(data)
        })
        this.chat.usersOnline().listen()
        this.chat.userSendMessage().listen((data) => {
            this.hasReceivedMessage(data)
        })
        this.chat.userTyping().listen((data) => {
            this.hasTypingMessageOn(data)
        })
        this.chat.userNotTyping().listen((data) => {
            this.hasTypingMessageOff(data)
        })
    }
    componentWillUnmount() {
        this.chat.userDisConnected().emit()

        // Fix Warning: Can't perform a React state update on an unmounted component
        // return null when escape component, it will no longer hold any data in memory
        this.setState = (state, callback) => {
            return
        }
    }
    render() {
        return (
            <div>
                <ChatButtonLeave {...this} />
                <div className="row" style={{ minHeight: "50vh" }}>
                    {/* Chat conversation */}
                    <ChatConversation conversation={this.state.data} currentUser={this.state.currentUser} {...this} />

                    {/* Chat member */}
                    <ChatMembers />
                </div>
                <div>
                    <ChatForm onSubmitMessage={this.hasSendMessage} {...this} />
                </div>
            </div>
        )
    }
}

export default Chat
