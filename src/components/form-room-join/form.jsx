import React, { useState } from "react"
import { Link } from "gatsby"
import { useForm } from "react-hook-form"
import { ROOM_UNIQUE_ID } from "./_constant"
import { ROOM_PASSWORD } from "../form-room-create/_constant"

const Form = ({ onSubmit, state }) => {
    const [hasPassword, setHasPassword] = useState(false)
    const [password, setPassword] = useState("")
    const { register, handleSubmit, errors } = useForm()

    const toggleHasPassword = () => {
        setHasPassword(!hasPassword)
        setPassword("")
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

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
                {state.error.hasError && state.error.message}
            </div>

            {/* has password? */}
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="enable-protected-room"
                    onChange={toggleHasPassword}
                />
                <label className="form-check-label" htmlFor="enable-protected-room">
                    Room has password?
                </label>
            </div>

            {/* password */}
            <div className={hasPassword ? "form-group" : "d-none"}>
                <input
                    className="form-control"
                    name={ROOM_PASSWORD.name}
                    type="password"
                    placeholder={ROOM_PASSWORD.placeholder}
                    value={password}
                    onChange={onChangePassword}
                    ref={register(ROOM_PASSWORD.validationRules(hasPassword))}
                />
                {errors[ROOM_PASSWORD.name] && errors[ROOM_PASSWORD.name].message}
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
