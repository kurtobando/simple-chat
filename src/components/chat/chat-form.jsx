import React from "react"

const ChatForm = () => {
    return (
        <form action="">
            <div className="row">
                <div className="col-12 col-sm-10">
                    <div className="form-group">
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="col-12 col-sm-2">
                    <div className="form-group">
                        <button className="btn btn-primary btn-block">Send</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ChatForm
