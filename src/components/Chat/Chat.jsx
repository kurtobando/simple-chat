import React from "react"
import store from "store2"
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
import hasOnlineUsers from "./_has-online-users"
import getRoomDetails from "./_get_room_details"
import "./_chat.scss"

class Chat extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            currentUser: {},
            onlineUsers: {},
            typingUser: [],
            timestamp: "",
            roomUniqId: "",
            roomName: "",
            roomDescription: "",
        }
        this.interval = null
        this.chat = new ChatSocketIO()
        this.hasJoinChat = hasJoinChat.bind(this)
        this.hasLeftChat = hasLeftChat.bind(this)
        this.hasSendMessage = hasSendMessage.bind(this)
        this.hasReceivedMessage = hasReceivedMessage.bind(this)
        this.hasTypingMessageOn = hasTypingMessageOn.bind(this)
        this.hasTypingMessageOff = hasTypingMessageOff.bind(this)
        this.hasOnlineUsers = hasOnlineUsers.bind(this)
        this.getRoomDetails = getRoomDetails.bind(this)
    }
    componentDidMount() {
        this.setState(
            {
                data: [],
                currentUser: {
                    id: chatGenerateUser.id,
                    name: chatGenerateUser.name,
                },
                roomUniqId: store("room_id"),
            },
            () => {
                this.getRoomDetails()
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
        this.chat.usersOnline().listen((data) => {
            this.hasOnlineUsers(data)
        })
        this.chat.userSendMessage().listen((data) => {
            this.hasReceivedMessage(data)
        })
        this.chat.userTyping().listen((data) => {
            this.hasTypingMessageOn(data)
        })
        this.chat.userNotTyping().listen((data) => {
            this.hasTypingMessageOff(data)
        })

        // add interval for us to re-render chat component with updated timestamp for every messages
        this.interval = setInterval(() => {
            this.setState({ timestamp: Date.now() })
        }, 5000)
    }
    componentWillUnmount() {
        this.chat.userDisConnected().emit()

        // Fix Warning: Can't perform a React state update on an unmounted component
        // return null when escape component, it will no longer hold any data in memory
        this.setState = (state, callback) => {
            return
        }

        // clear interval to prevent errors and leaking memory
        clearInterval(this.interval)
    }
    render() {
        return (
            <React.Fragment>
                <div className="text-center text-info p-2">
                    <div className="d-flex justify-content-center">
                        <div className="ml-2 mr-2">
                            UNIQUE ROOM ID <span className="badge badge-info p-1">{this.state.roomUniqId}</span>
                        </div>
                        <div className="ml-2 mr-2">
                            ROOM NAME{" "}
                            <span className="badge badge-info p-1" title={this.state.roomDescription}>
                                {this.state.roomName}
                            </span>
                        </div>
                    </div>
                </div>
                <div id="chat">
                    <div id="chat-conversation-members">
                        {/* Chat conversation */}
                        <ChatConversation
                            conversation={this.state.data}
                            currentUser={this.state.currentUser}
                            {...this}
                        />
                        {/* Chat member */}
                        <ChatMembers {...this} />
                    </div>
                    <div id="chat-form">
                        <ChatForm onSubmitMessage={this.hasSendMessage} {...this} />
                    </div>
                </div>
                <div id="chat-actions" className="mt-2 mb-2">
                    <ChatButtonLeave {...this} />
                </div>
            </React.Fragment>
        )
    }
}

export default Chat
