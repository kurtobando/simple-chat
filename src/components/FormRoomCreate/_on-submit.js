import { navigate } from "gatsby"
import store from "store2"
import axios from "axios"
import helperAxiosErrorHandler from "../../helper/_helper-axios-error-handler"
import { GATSBY_API_BASE_URL } from "../../_variables"

const onSubmit = (data) => {
    axios({
        baseURL: GATSBY_API_BASE_URL,
        url: "/room-create",
        method: "POST",
        data: data,
    })
        .then((response) => {
            const { data = {} } = response.data
            const { room_id = null } = data

            store("room_id", room_id)

            return navigate(`/dashboard?room_id=${room_id}`)
        })
        .catch((error) => {
            helperAxiosErrorHandler(error)
        })
}

export default onSubmit
