import React from "react"
import Header from "./_header"
import Footer from "./_footer"

const Layout = (props) => {
    return (
        <div className="container-fluid">
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout
