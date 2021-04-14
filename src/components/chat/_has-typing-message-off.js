function hasTypingMessageOff(data) {
    this.setState((prevState) => {
        const stillTypingUsers = prevState.typingUser.filter((name) => {
            return name !== data.user.name
        })
        return {
            typingUser: [...stillTypingUsers],
        }
    })
}

export default hasTypingMessageOff
