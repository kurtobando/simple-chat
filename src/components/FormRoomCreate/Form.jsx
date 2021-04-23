import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { useForm } from "react-hook-form"
import uniqid from "uniqid"
import onSubmit from "./_on-submit"
import {
    ROOM_NAME,
    ROOM_DESCRIPTION,
    ROOM_ENABLE_PASSWORD,
    ROOM_UNIQUE_ID,
    ROOM_PASSWORD,
    ROOM_RETYPE_PASSWORD,
} from "./_constant"

const Form = () => {
    const [isEnabledPassword, setIsEnabledPassword] = useState(false)
    const [uniqRoomId, setUniqRoomId] = useState("")
    const [password, setPassword] = useState("")
    const [retypePassword, setRetypePassword] = useState("")
    const { register, handleSubmit, errors } = useForm({
        mode: "onSubmit",
    })

    useEffect(() => {
        setUniqRoomId(uniqid("simple-chat-"))
    }, [])

    return (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            {/* room name */}
            <div className="form-group">
                <input
                    className="form-control"
                    type="text"
                    name={ROOM_NAME.name}
                    placeholder={ROOM_NAME.placeholder}
                    ref={register(ROOM_NAME.validationRules())}
                />
                {errors[ROOM_NAME.name] && <span className="text-danger small">{errors[ROOM_NAME.name].message}</span>}
            </div>

            {/* room description */}
            <div className="form-group">
                <input
                    className="form-control"
                    type="text"
                    name={ROOM_DESCRIPTION.name}
                    placeholder={ROOM_DESCRIPTION.placeholder}
                    ref={register(ROOM_DESCRIPTION.validationRules())}
                />
                {errors[ROOM_DESCRIPTION.name] && (
                    <span className="text-danger small">{errors[ROOM_DESCRIPTION.name].message}</span>
                )}
            </div>

            {/* room unique id */}
            <div className="form-group">
                <input
                    className="form-control"
                    type="text"
                    name={ROOM_UNIQUE_ID.name}
                    placeholder={ROOM_UNIQUE_ID.placeholder}
                    readOnly={true}
                    ref={register}
                    value={uniqRoomId}
                    title="room unique id"
                />
            </div>

            {/* enable protected room */}
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    name={ROOM_ENABLE_PASSWORD.name}
                    id="enable-protected-room"
                    ref={register}
                    onChange={() => setIsEnabledPassword(!isEnabledPassword)}
                />
                <label className="form-check-label small ml-1" htmlFor="enable-protected-room">
                    {ROOM_ENABLE_PASSWORD.placeholder}
                </label>
            </div>

            <div className={isEnabledPassword ? "d-block mt-2" : "d-none"}>
                {/* password */}
                <div className="form-group">
                    <input
                        className="form-control"
                        type="password"
                        name={ROOM_PASSWORD.name}
                        placeholder={ROOM_PASSWORD.placeholder}
                        ref={register(ROOM_PASSWORD.validationRules(isEnabledPassword))}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors[ROOM_PASSWORD.name] && (
                        <span className="text-danger small">{errors[ROOM_PASSWORD.name].message}</span>
                    )}
                </div>

                {/* retype password */}
                <div className="form-group">
                    <input
                        className="form-control"
                        type="password"
                        name={ROOM_RETYPE_PASSWORD.name}
                        placeholder={ROOM_RETYPE_PASSWORD.placeholder}
                        ref={register(
                            ROOM_RETYPE_PASSWORD.validationRules(password, retypePassword, isEnabledPassword)
                        )}
                        value={retypePassword}
                        onChange={(e) => setRetypePassword(e.target.value)}
                    />
                    {errors[ROOM_RETYPE_PASSWORD.name] && (
                        <span className="text-danger small">{errors[ROOM_RETYPE_PASSWORD.name].message}</span>
                    )}
                </div>
            </div>

            {/* buttons */}
            <div className="form-group text-center mt-2">
                <button className="mt-1 btn btn-block btn-primary" type="submit">
                    Create
                </button>
                <Link to="/" className="mt-1 btn btn-block btn-outline-primary">
                    Cancel
                </Link>
            </div>
        </form>
    )
}

export default Form
