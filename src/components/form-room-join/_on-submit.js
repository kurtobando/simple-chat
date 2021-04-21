import { navigate } from "gatsby"
import store from "store2"
import axios from "axios"
import helperAxiosErrorHandler from "../../_helper-axios-error-handler"
import { GATSBY_API_BASE_URL } from "../../_variables"

function onSubmit(data) {
    console.log(this)
    axios({
        baseURL: GATSBY_API_BASE_URL,
        url: "/room-join",
        method: "POST",
        data: data,
    })
        .then((response) => {
            const { success = false, message = "", data = {} } = response.data
            const { room_id = null } = data

            if (!success) {
                return this.setState(() => {
                    return {
                        error: {
                            hasError: true,
                            message,
                        },
                    }
                })
            }

            store("room_id", room_id)

            return navigate(`/dashboard?room_id=${room_id}`)
        })
        .catch((error) => {
            helperAxiosErrorHandler(error)
        })
}

export default onSubmit
