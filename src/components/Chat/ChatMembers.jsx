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

    const onlineUsersCount = Object.keys(onlineUsers).length
    const onlineUsersMap = Object.keys(onlineUsers).map((key) => {
        const name = onlineUsers[key].user.name || null
        const id = onlineUsers[key].user.id || null
        const imageSource = `https://avatars.dicebear.com/api/human/${name}.svg`

        return (
            <div key={id} className="d-flex flex-column justify-content-center">
                <div className="bg-white small p-2 " style={styles}>
                    <img src={imageSource} alt={name} style={{ height: "40px", width: "40px" }} />
                </div>
                <span className="text-success d-block p-1 small text-center rounded" style={{ fontSize: "0.6em" }}>
                    {name}
                </span>
            </div>
        )
    })
    return (
        <React.Fragment>
            <div id="chat-members">
                <div id="chat-members-count" className="d-block small text-center text-success  m-auto ">
                    {`${onlineUsersCount} Online Users`}
                </div>
                {onlineUsersMap}
            </div>
        </React.Fragment>
    )
}

export default ChatMembers
