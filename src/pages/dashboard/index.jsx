import React from "react"
import Layout from "./_layout"
import Chat from "../../components/chat/chat"
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
            <Layout>
                <div className="container-fluid">
                    <Chat />
                </div>
            </Layout>
        )
    }
}

export default Index
