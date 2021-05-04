import React from "react"
import { navigate } from "gatsby"
import store from "store2"

const ChatButtonLeave = ({ chat }) => {
    const onLeaveChat = () => {
        const room_id = store("room_id")

        chat.userDisConnected().emit()

        store("room_id", "")

        return navigate(`/?leave_chat=true&from=${room_id}`)
    }
    return (
        <React.Fragment>
            <button className="btn btn-block btn-outline-danger" onClick={onLeaveChat}>
                Leave Chat
            </button>
        </React.Fragment>
    )
}

export default ChatButtonLeave
