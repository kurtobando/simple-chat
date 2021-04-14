import { io } from "socket.io-client"

class ChatSocketIO {
    constructor() {
        this.socket = io("http://localhost:3000")
        this.user = {}
        this.message = null
    }
    connect() {
        this.socket.on("connect", () => {
            console.log(`[client] user connected ${this.socket.id}`, this.user)
        })
    }
    connect_error() {
        this.socket.on("connect_error", (error) => {
            console.log(`[client] connection_error: ${error}`)
        })
    }
    disconnect() {
        return this.socket.on("disconnect", (reason) => {
            console.log(`[client] user disconnected ${this.socket.id}`)
            console.log(`[client] user ${this.user}`)
            console.log(`[client] ${reason}`)
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
                    console.log(`[client][USER_CONNECTED] received from server ${JSON.stringify(data)}`)

                    if (callback) {
                        return callback(data)
                    }
                })
            },
        }
    }
    userDisConnected() {
        return {
            listen: (callback) => {
                this.socket.on("USER_DISCONNECTED", (data) => {
                    console.log(`[client][SERVER_USER_DISCONNECTED] received from server ${JSON.stringify(data)}`)

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
                    console.log(`[client] send message`, data)

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
                    console.log(`[client] user typing`, data)

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
                    console.log(`[client] user not typing`, data)

                    if (callback) {
                        return callback(data)
                    }
                })
            },
        }
    }
}

export default ChatSocketIO
