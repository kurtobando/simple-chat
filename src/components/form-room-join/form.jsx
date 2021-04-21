import React, { useState } from "react"
import { Link } from "gatsby"
import { useForm } from "react-hook-form"
import onSubmit from "./_on-submit"
import { ROOM_UNIQUE_ID } from "./_constant"

const Form = () => {
    const [hasPassword, setHasPassword] = useState(false)
    const { register, handleSubmit, errors } = useForm()

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* room unique id */}
            <div className="form-group">
                <input
                    className="form-control"
                    type="text"
                    name={ROOM_UNIQUE_ID.name}
                    placeholder={ROOM_UNIQUE_ID.placeholder}
                    ref={register(ROOM_UNIQUE_ID.validationRules())}
                />
                {errors[ROOM_UNIQUE_ID.name] && errors[ROOM_UNIQUE_ID.name].message}
            </div>

            {/* has password? */}
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="enable-protected-room"
                    onChange={() => setHasPassword(!hasPassword)}
                />
                <label className="form-check-label" htmlFor="enable-protected-room">
                    Room has password?
                </label>
            </div>

            {/* password */}
            <div className={hasPassword ? "form-group" : "d-none"}>
                <input className="form-control" type="text" placeholder="Password" />
            </div>

            {/* buttons */}
            <div className="form-group text-center">
                <button className="m-1 btn btn-primary" type="submit">
                    Join
                </button>
                <Link to="/" className="m-1 btn btn-outline-primary">
                    Cancel
                </Link>
            </div>
        </form>
    )
}

export default Form
