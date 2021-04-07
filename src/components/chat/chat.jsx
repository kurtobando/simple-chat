import React from "react"
import ChatConversation from "./chat-conversation"
import ChatMembers from "./chat-members"
import ChatForm from "./chat-form"
import data from "./_data.json"

class Chat extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            currentUser: {},
        }
    }
    componentDidMount() {
        this.setState({
            data: data,
            currentUser: {
                id: 0,
                name: "john doe",
            },
        })
    }
    render() {
        return (
            <div>
                <div className="row" style={{ minHeight: "50vh" }}>
                    {/* chat conversation */}
                    <ChatConversation conversation={this.state.data} currentUser={this.state.currentUser} />

                    {/* chat member */}
                    <ChatMembers />
                </div>
                <div>
                    <ChatForm />
                </div>
            </div>
        )
    }
}

export default Chat
