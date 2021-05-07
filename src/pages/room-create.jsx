import React from "react"
import FormRoomCreate from "../components/FormRoomCreate/FormRoomCreate"
import GlobalLayout from "../components/GlobalLayout"
import GlobalHeader from "../components/GlobalHeader"

const RoomCreate = () => {
    return (
        <React.Fragment>
            <GlobalHeader />
            <GlobalLayout>
                <div
                    className="d-flex flex-row justify-content-center align-items-center"
                    style={{ height: "inherit" }}>
                    <div style={{ width: "100%", maxWidth: "350px" }} className="p-3">
                        <FormRoomCreate />
                    </div>
                </div>
            </GlobalLayout>
        </React.Fragment>
    )
}

export default RoomCreate
