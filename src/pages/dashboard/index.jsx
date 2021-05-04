import React from "react"
import GlobalLayout from "../../components/GlobalLayout"
import Chat from "../../components/Chat/Chat"
import store from "store2"
import { navigate } from "gatsby"

class Index extends React.Component {
    constructor() {
        super()
        this.interval = null
    }
    componentDidMount() {
        // if room id is not present, redirect to index page
        if (!store("room_id")) {
            return navigate("/?authenticated=false")
        }
        this.interval = setInterval(() => {
            if (!store("room_id")) {
                return navigate("/?authenticated=false")
            }
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <GlobalLayout>
                <div className="container-fluid" style={{ height: "inherit" }}>
                    <Chat />
                </div>
            </GlobalLayout>
        )
    }
}

export default Index
