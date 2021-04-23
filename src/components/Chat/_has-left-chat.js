function hasLeftChat(args) {
    this.setState((prevState) => {
        return {
            data: [
                ...prevState.data,
                {
                    id: Date.now(),
                    timestamp: Date.now(),
                    is_conversation: false,
                    is_archive: false,
                    is_sent: true,
                    user: args.user,
                    text: "HAS_LEFT_CHAT",
                },
            ],
        }
    })
}

export default hasLeftChat
