import * as React from "react"
import { Link } from "gatsby"
import GlobalLayout from "../components/GlobalLayout"

const Index = () => {
    return (
        <GlobalLayout>
            <div className="d-flex flex-row justify-content-center align-items-center" style={{ height: "inherit" }}>
                <div className="text-center" style={{ width: "100%", maxWidth: "350px" }}>
                    <Link to="/room-create" className="m-1 btn btn-block btn-primary">
                        Create Room
                    </Link>
                    <Link to="/room-join" className="m-1 btn btn-block btn-outline-primary">
                        Join Room
                    </Link>
                </div>
            </div>
        </GlobalLayout>
    )
}

export default Index
