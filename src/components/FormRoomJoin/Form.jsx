import React, { useState } from "react"
import { Link } from "gatsby"
import { useForm } from "react-hook-form"
import { ROOM_UNIQUE_ID } from "./_constant"
import { ROOM_PASSWORD } from "../FormRoomCreate/_constant"

const Form = ({ onSubmit, state }) => {
    const [hasPassword, setHasPassword] = useState(false)
    const [password, setPassword] = useState("")
    const { register, handleSubmit, errors } = useForm({
        mode: "onSubmit",
    })

    const toggleHasPassword = () => {
        setHasPassword(!hasPassword)
        setPassword("")
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            {/* room unique id */}
            <div className="form-group">
                <input
                    className="form-control"
                    type="text"
                    name={ROOM_UNIQUE_ID.name}
                    placeholder={ROOM_UNIQUE_ID.placeholder}
                    ref={register(ROOM_UNIQUE_ID.validationRules())}
                />
                {errors[ROOM_UNIQUE_ID.name] && (
                    <span className="text-danger small">{errors[ROOM_UNIQUE_ID.name].message}</span>
                )}
                {state.error.hasError && <span className="text-danger small">{state.error.message}</span>}
            </div>

            {/* has password? */}
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="enable-protected-room"
                    onChange={toggleHasPassword}
                />
                <label className="form-check-label small ml-1" htmlFor="enable-protected-room">
                    Room has password?
                </label>
            </div>

            {/* password */}
            <div className={hasPassword ? "form-group mt-3" : "d-none"}>
                <input
                    className="form-control"
                    name={ROOM_PASSWORD.name}
                    type="password"
                    placeholder={ROOM_PASSWORD.placeholder}
                    value={password}
                    onChange={onChangePassword}
                    ref={register(ROOM_PASSWORD.validationRules(hasPassword))}
                />
                {errors[ROOM_PASSWORD.name] && (
                    <span className="text-danger small">{errors[ROOM_PASSWORD.name].message}</span>
                )}
            </div>

            {/* buttons */}
            <div className="form-group text-center mt-3">
                <button className="mt-1 btn btn-block btn-primary" type="submit">
                    Join
                </button>
                <Link to="/" className="mt-1 btn btn-block btn-outline-primary">
                    Cancel
                </Link>
            </div>
        </form>
    )
}

export default Form
