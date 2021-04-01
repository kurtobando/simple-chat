import React from "react"
import { Link } from "gatsby"

class FormRoomJoin extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <form>
                {/* room unique id */}
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Room Unique ID" />
                </div>

                {/* has password? */}
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="enable-protected-room" />
                    <label className="form-check-label" htmlFor="enable-protected-room">
                        Room has password?
                    </label>
                </div>

                {/* password */}
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Password" />
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
        )
    }
}

export default FormRoomJoin
