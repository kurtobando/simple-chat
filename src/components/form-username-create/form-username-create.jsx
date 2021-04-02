import React from "react"
import { Link } from "gatsby"
import { useForm } from "react-hook-form"
import onSubmit from "./_on-submit"
import { USER_NAME } from "./_constant"

const FormUsernameCreate = () => {
    const { register, handleSubmit, errors } = useForm({
        reValidateMode: "onSubmit",
    })
    return (
        <div className="container-fluid">
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            name={USER_NAME.name}
                            placeholder={USER_NAME.placeholder}
                            ref={register(USER_NAME.validationRules())}
                        />
                        {errors[USER_NAME.name] && errors[USER_NAME.name].message}
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

export default FormUsernameCreate
