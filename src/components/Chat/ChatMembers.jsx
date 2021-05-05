import React from "react"

const styles = {
    wordWrap: "break-word",
    borderRadius: "50%",
    textAlign: "center",
    height: "5.5em",
    width: "5.5em",
    margin: "5px auto 0px auto",
}

const ChatMembers = ({ state }) => {
    const { onlineUsers } = state

    const onlineUsersMap = Object.keys(onlineUsers).map((key) => {
        const name = onlineUsers[key].user.name || null
        const id = onlineUsers[key].user.id || null
        const imageSource = `https://avatars.dicebear.com/api/human/${name}.svg`

        return (
            <div key={id}>
                <div className="bg-white small p-2 " style={styles}>
                    <img src={imageSource} alt={name} style={{ height: "40px", width: "40px" }} />
                </div>
                <span className="text-info m-auto d-block p-1 small text-center rounded" style={{ fontSize: "0.6em" }}>
                    {name}
                </span>
            </div>
        )
    })

    return <div id="chat-members">{onlineUsersMap}</div>
}

export default ChatMembers
