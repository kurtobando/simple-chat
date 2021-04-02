import * as React from "react"
import { Link } from "gatsby"

const Index = () => {
    return (
        <div className="container-fluid">
            <div className="min-vh-100 d-flex flex-row justify-content-center align-items-center">
                <div className="text-center">
                    <Link to="/room-create" className="m-1 btn btn-primary">
                        Create a room
                    </Link>
                    <Link to="/room-join" className="m-1 btn btn-outline-primary">
                        Join a room
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Index
