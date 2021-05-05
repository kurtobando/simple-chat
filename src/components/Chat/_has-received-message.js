function hasReceivedMessage(data = {}) {
    const { message, user } = data

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
                    user: user,
                    text: message,
                },
            ],
        }
    })
}

export default hasReceivedMessage
