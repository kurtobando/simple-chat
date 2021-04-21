import React from "react"
import Layout from "./_layout"
import Chat from "../../components/chat/chat"
import store from "store2"
import { navigate } from "gatsby"

class Index extends React.Component {
    componentDidMount() {
        // if room id is not present, redirect to index page
        if (!store("room_id")) {
            return navigate("/?authenticated=false")
        }
        setInterval(() => {
            if (!store("room_id")) {
                return navigate("/?authenticated=false")
            }
        }, 1000)
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
