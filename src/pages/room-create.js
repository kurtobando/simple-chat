import React from "react"
import { Link } from "gatsby"

const RoomCreate = () => {
    return (
        <div className="container-fluid">
            <div>
                <form>
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Room Name" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Room Description" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Room Unique ID" readOnly={true} />
                    </div>
                    <div className="form-group text-center">
                        <button className="m-1 btn btn-primary" type="submit">
                            Create
                        </button>
                        <Link to="/" className="m-1 btn btn-outline-primary">
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RoomCreate
