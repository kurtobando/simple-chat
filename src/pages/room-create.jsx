import React from "react"
import FormRoomCreate from "../components/FormRoomCreate/FormRoomCreate"
import GlobalLayout from "../components/GlobalLayout"

const RoomCreate = () => {
    return (
        <GlobalLayout>
            <div className="d-flex flex-row justify-content-center align-items-center" style={{ height: "inherit" }}>
                <div style={{ width: "100%", maxWidth: "350px" }} className="p-3">
                    <FormRoomCreate />
                </div>
            </div>
        </GlobalLayout>
    )
}

export default RoomCreate
