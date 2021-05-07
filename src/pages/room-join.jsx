import React from "react"
import FormRoomJoin from "../components/FormRoomJoin/FormRoomJoin"
import GlobalLayout from "../components/GlobalLayout"
import GlobalHeader from "../components/GlobalHeader"

const RoomJoin = () => {
    return (
        <React.Fragment>
            <GlobalHeader />
            <GlobalLayout>
                <div
                    className="d-flex flex-row justify-content-center align-items-center"
                    style={{ height: "inherit" }}>
                    <div style={{ width: "100%", maxWidth: "350px" }} className="p-3">
                        <FormRoomJoin />
                    </div>
                </div>
            </GlobalLayout>
        </React.Fragment>
    )
}

export default RoomJoin
