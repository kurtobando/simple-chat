import * as React from "react"
import { Link } from "gatsby"
import GlobalHeader from "../components/GlobalHeader"

const NotFoundPage = () => {
    return (
        <React.Fragment>
            <GlobalHeader />
            <div className="text-center bg-light vh-100">
                <div className="d-flex flex-column justify-content-center" style={{ height: "inherit" }}>
                    <div className="p-5">
                        <h1>Sorry, Page Not found</h1>
                        <p>
                            Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first
                            place? Let's go{" "}
                            <Link to="/" className="text-info">
                                home
                            </Link>
                            . and try from there.
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NotFoundPage
