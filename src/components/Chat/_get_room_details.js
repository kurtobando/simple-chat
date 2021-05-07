import axios from "axios"
import store from "store2"
import { GATSBY_API_BASE_URL } from "../../_variables"
import helperAxiosErrorHandler from "../../helper/_helper-axios-error-handler"

function getRoomDetails() {
    const roomId = store("room_id")

    axios({
        baseURL: GATSBY_API_BASE_URL,
        url: `/room-details/${roomId}`,
        method: "GET",
    })
        .then((response) => {
            const { data } = response.data
            const { room_name, room_description } = data

            this.setState(() => {
                return {
                    roomName: room_name,
                    roomDescription: room_description,
                }
            })
        })
        .catch((error) => {
            helperAxiosErrorHandler(error)
        })
}

export default getRoomDetails
