import * as React from "react"
import { Link } from "gatsby"
import GlobalLayout from "../components/GlobalLayout"
import GlobalHeader from "../components/GlobalHeader"

const Index = () => {
    return (
        <React.Fragment>
            <GlobalHeader />
            <GlobalLayout>
                <div
                    className="d-flex flex-row justify-content-center align-items-center"
                    style={{ height: "inherit" }}>
                    <div className="text-center p-3" style={{ width: "100%", maxWidth: "350px" }}>
                        <Link to="/room-create" className="mt-1 btn btn-block btn-primary">
                            Create Room
                        </Link>
                        <Link to="/room-join" className="mt-1 btn btn-block btn-outline-primary">
                            Join Room
                        </Link>
                    </div>
                </div>
            </GlobalLayout>
        </React.Fragment>
    )
}

export default Index
