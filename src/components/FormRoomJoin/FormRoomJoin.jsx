import React from "react"
import Form from "./Form"
import onSubmit from "./_on-submit"

class FormRoomJoin extends React.Component {
    constructor() {
        super()
        this.state = {
            error: {
                hasError: false,
                message: "",
            },
        }
        this.onSubmit = onSubmit.bind(this)
    }
    render() {
        return <Form {...this} />
    }
}

export default FormRoomJoin
