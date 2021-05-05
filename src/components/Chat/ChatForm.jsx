import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Picker, Emoji } from "emoji-mart"
import "emoji-mart/css/emoji-mart.css"

const ChatForm = (props) => {
    const { onSubmitMessage, chat = {} } = props
    const { register, handleSubmit, errors } = useForm({ reValidateMode: "onSubmit", mode: "onSubmit" })
    const [message, setMessage] = useState("")
    const [toggleEmoji, setToggleEmoji] = useState(false)
    let timer = 0

    const onSubmit = (data, event) => {
        event.preventDefault()

        // clear text from message input field
        setMessage("")

        // hide emoji toggle
        if (toggleEmoji === true) {
            setToggleEmoji(false)
        }

        onSubmitMessage(data)
    }
    const onChange = (event) => {
        setMessage(event.target.value)
    }
    const onKeyUp = () => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            chat.userNotTyping().emit()
        }, 1000)
    }
    const onKeyDown = () => {
        clearTimeout(timer)
        chat.userTyping().emit()
    }
    const onKeyPress = (event) => {
        if (event.key === "Enter") {
            document.getElementById("chat-form-button").click()
        }
    }
    const onClickEmoji = (emoji) => {
        setMessage(`${message} ${emoji.native}`)
    }
    const onToggleEmoji = () => {
        setToggleEmoji(!toggleEmoji)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-12 col-sm-9">
                    <div className="d-flex">
                        <div className="form-group mb-2 mb-sm-0 flex-grow-1">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="type message here ..."
                                name="message"
                                value={message}
                                onChange={onChange}
                                onKeyUp={onKeyUp}
                                onKeyDown={onKeyDown}
                                onKeyPress={onKeyPress}
                                ref={register({
                                    required: {
                                        value: true,
                                        message: "message cannot be empty",
                                    },
                                    maxLength: {
                                        value: 180,
                                        message: "characters length on your message exceeded at 180 characters",
                                    },
                                })}
                            />
                            <small>{errors["message"] && errors["message"].message}</small>
                        </div>
                        <span className="ml-1" style={{ position: "relative" }}>
                            <div
                                id="chat-form-emoji"
                                className={toggleEmoji === false ? "d-none" : "d-block"}
                                style={{ position: "absolute", right: "0px", bottom: "45px" }}>
                                <Picker
                                    onClick={onClickEmoji}
                                    exclude={[
                                        "search",
                                        "flags",
                                        "symbols",
                                        "objects",
                                        "places",
                                        "activity",
                                        "foods",
                                        "nature",
                                    ]}
                                    showPreview={false}
                                    showSkinTones={false}
                                />
                            </div>
                            <a
                                href="#toggle-emoji"
                                className="btn btn-outline-primary rounded"
                                onClick={onToggleEmoji}
                                style={{ padding: "0.4em 0.5em 0.0em 0.5em" }}>
                                <Emoji emoji={{ id: "grin", skin: null }} size={20} />
                            </a>
                        </span>
                    </div>
                </div>
                <div className="col-12 col-sm-3">
                    <div className="form-group mb-0">
                        <button type="submit" className="btn btn-primary btn-block" id="chat-form-button">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ChatForm
