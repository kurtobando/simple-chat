function hasOnlineUsers(args) {
    this.setState((prevState) => {
        return {
            onlineUsers: args,
        }
    })
}

export default hasOnlineUsers
