import React from "react"
import { Link } from "gatsby"

const RoomCreate = () => {
    return (
        <div className="container-fluid">
            <div>
                <form>
                    {/* room name */}
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Room Name" />
                    </div>

                    {/* room description */}
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Room Description" />
                    </div>

                    {/* room unique id */}
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Room Unique ID" readOnly={true} />
                    </div>

                    {/* enable protected room */}
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="enable-protected-room" />
                        <label className="form-check-label" htmlFor="enable-protected-room">
                            Enable Protected Room?
                        </label>
                    </div>

                    {/* password */}
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Password" />
                    </div>

                    {/* retype password */}
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Re-type Password" />
                    </div>

                    {/* buttons */}
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
