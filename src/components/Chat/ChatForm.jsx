import React, { useState } from "react"
import { useForm } from "react-hook-form"

const ChatForm = (props) => {
    const { onSubmitMessage, chat = {} } = props
    const { register, handleSubmit, errors } = useForm({ reValidateMode: "onSubmit" })
    const [message, setMessage] = useState("")
    let timer = 0

    const onSubmit = (data, event) => {
        event.preventDefault()
        setMessage("")
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

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-12 col-sm-9">
                    <div className="form-group mb-2 mb-sm-0">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="type message here ..."
                            name="message"
                            value={message}
                            onChange={onChange}
                            onKeyUp={onKeyUp}
                            onKeyDown={onKeyDown}
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
                </div>
                <div className="col-12 col-sm-3">
                    <div className="form-group mb-0">
                        <button className="btn btn-primary btn-block">Send</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ChatForm
