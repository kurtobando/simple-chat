import React from "react"
import FormRoomJoin from "../components/FormRoomJoin/FormRoomJoin"
import GlobalLayout from "../components/GlobalLayout"

const RoomJoin = () => {
    return (
        <GlobalLayout>
            <div className="d-flex flex-row justify-content-center align-items-center" style={{ height: "inherit" }}>
                <div style={{ width: "100%", maxWidth: "350px" }}>
                    <FormRoomJoin />
                </div>
            </div>
        </GlobalLayout>
    )
}

export default RoomJoin
