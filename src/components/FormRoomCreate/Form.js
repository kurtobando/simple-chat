import React from "react"
import { Link } from "gatsby"
import { useForm } from "react-hook-form"
import onSubmit from "./_onSubmit"
import {
    ROOM_NAME,
    ROOM_DESCRIPTION,
    ROOM_ENABLE_PASSWORD,
    ROOM_UNIQUE_ID,
    ROOM_PASSWORD,
    ROOM_RETYPE_PASSWORD,
} from "./_constant"

const Form = () => {
    const { register, handleSubmit, errors } = useForm()

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* room name */}
            <div className="form-group">
                <input
                    className="form-control"
                    type="text"
                    name={ROOM_NAME.name}
                    placeholder={ROOM_NAME.placeholder}
                    ref={register(ROOM_NAME.validationRules())}
                />
                {errors[ROOM_NAME.name] && errors[ROOM_NAME.name].message}
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
                {errors[ROOM_DESCRIPTION.name] && errors[ROOM_DESCRIPTION.name].message}
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
                />
            </div>

            {/* enable protected room */}
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value="true"
                    name={ROOM_ENABLE_PASSWORD.name}
                    id="enable-protected-room"
                    ref={register}
                />
                <label className="form-check-label" htmlFor="enable-protected-room">
                    {ROOM_ENABLE_PASSWORD.placeholder}
                </label>
            </div>

            {/* password */}
            <div className="form-group">
                <input
                    className="form-control"
                    type="text"
                    name={ROOM_PASSWORD.name}
                    placeholder={ROOM_PASSWORD.placeholder}
                    ref={register(ROOM_PASSWORD.validationRules())}
                />
                {errors[ROOM_PASSWORD.name] && errors[ROOM_PASSWORD.name].message}
            </div>

            {/* retype password */}
            <div className="form-group">
                <input
                    className="form-control"
                    type="text"
                    name={ROOM_RETYPE_PASSWORD.name}
                    placeholder={ROOM_RETYPE_PASSWORD.placeholder}
                    ref={register(ROOM_RETYPE_PASSWORD.validationRules())}
                />
                {errors[ROOM_RETYPE_PASSWORD.name] && errors[ROOM_RETYPE_PASSWORD.name].message}
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

export default Form
