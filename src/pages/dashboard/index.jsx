import React from "react"
import Layout from "./_layout"
import Chat from "../../components/chat/chat"

class Index extends React.Component {
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
