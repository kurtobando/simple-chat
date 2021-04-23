import React from "react"
import GlobalHeader from "./GlobalHeader"
import GlobalFooter from "./GlobalFooter"

const GlobalLayout = (props) => {
    return (
        <div>
            <GlobalHeader />
            {props.children}
            <GlobalFooter />
        </div>
    )
}

export default GlobalLayout
