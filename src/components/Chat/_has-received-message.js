function hasReceivedMessage(data = {}) {
    const { message } = data

    this.setState((prevState) => {
        return {
            data: [
                ...prevState.data,
                {
                    id: Date.now(),
                    timestamp: Date.now(),
                    is_conversation: true,
                    is_archive: false,
                    is_sent: true,
                    user: this.state.currentUser,
                    text: message,
                },
            ],
        }
    })
}

export default hasReceivedMessage
