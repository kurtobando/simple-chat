import { io } from "socket.io-client"

class ChatSocketIO {
    constructor() {
        this.socket = io("http://localhost:3000")
        this.user = {}
        this.message = null
    }
    connect() {
        this.socket.on("connect", () => {
            return false
        })
    }
    connect_error() {
        this.socket.on("connect_error", (error) => {
            return false
        })
    }
    disconnect() {
        return this.socket.on("disconnect", (reason) => {
            return false
        })
    }
    setUser(user = {}) {
        this.user = user
    }
    setMessage(message = null) {
        this.message = message
    }
    userConnected() {
        return {
            emit: () => {
                this.socket.emit("USER_CONNECTED", { user: this.user })
            },
            listen: (callback) => {
                this.socket.on("USER_CONNECTED", (data) => {
                    if (callback) {
                        return callback(data)
                    }
                })
            },
        }
    }
    userDisConnected() {
        return {
            emit: () => {
                this.socket.emit("USER_DISCONNECTED", { user: this.user })
            },
            listen: (callback) => {
                this.socket.on("USER_DISCONNECTED", (data) => {
                    if (callback) {
                        return callback(data)
                    }
                })
            },
        }
    }
    usersOnline() {
        return {
            listen: () => {
                this.socket.on("ONLINE_USERS", (data) => {
                    console.log(`[client] online users`, { onlineUsers: data, length: Object.keys(data).length })
                })
            },
        }
    }
    userSendMessage() {
        return {
            emit: () => {
                this.socket.emit("USER_SEND_MESSAGE", { message: this.message })
            },
            listen: (callback) => {
                this.socket.on("USER_SEND_MESSAGE", (data) => {
                    if (callback) {
                        return callback(data)
                    }
                })
            },
        }
    }
    userTyping() {
        const USER_TYPING = "USER_TYPING"
        return {
            emit: () => {
                this.socket.emit(USER_TYPING, { user: this.user })
            },
            listen: (callback) => {
                this.socket.on(USER_TYPING, (data) => {
                    if (callback) {
                        return callback(data)
                    }
                })
            },
        }
    }
    userNotTyping() {
        const USER_NOT_TYPING = "USER_NOT_TYPING"
        return {
            emit: () => {
                this.socket.emit(USER_NOT_TYPING, { user: this.user })
            },
            listen: (callback) => {
                this.socket.on(USER_NOT_TYPING, (data) => {
                    if (callback) {
                        return callback(data)
                    }
                })
            },
        }
    }
}

export default ChatSocketIO
