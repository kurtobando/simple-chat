import React from "react"

const styles = {
    wordWrap: "break-word",
    borderRadius: "50%",
    textAlign: "center",
    height: "6em",
    width: "6em",
}

const ChatMembers = ({ state }) => {
    const { onlineUsers } = state

    const onlineUsersMap = Object.keys(onlineUsers).map((key) => {
        const name = onlineUsers[key].user.name || null
        const id = onlineUsers[key].user.id || null

        return (
            <div key={id} className="bg-white border m-1 small p-2 " style={styles}>
                {name}
            </div>
        )
    })

    return <div id="chat-members">{onlineUsersMap}</div>
}

export default ChatMembers
