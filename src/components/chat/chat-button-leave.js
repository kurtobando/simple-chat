import React from "react"
import { navigate } from "gatsby"
import store from "store2"

const ChatButtonLeave = () => {
    const onLeaveChat = () => {
        const room_id = store("room_id")
        store(false)
        return navigate(`/?leave_chat=true&from=${room_id}`)
    }
    return (
        <React.Fragment>
            <button className="btn btn-block btn-outline-primary" onClick={onLeaveChat}>
                Leave Chat
            </button>
        </React.Fragment>
    )
}

export default ChatButtonLeave
