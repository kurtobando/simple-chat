import React from "react"
import FormRoomCreate from "../components/FormRoomCreate/FormRoomCreate"
import GlobalLayout from "../components/GlobalLayout"
import GlobalHeader from "../components/GlobalHeader"

const RoomCreate = () => {
    return (
        <React.Fragment>
            <GlobalHeader />
            <div className="modal fade text-dark" id="HowThisWork" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                How this works?
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>
                                Start creating a room by giving its <span className="text-info">Room Name</span>,{" "}
                                <span className="text-info">Room Description</span>, and decide if you wish to add
                                password for your desired room name.
                            </p>
                            <p>
                                A <span className="text-info">UNIQUE ROOM ID</span> will be provided across to newly
                                rooms, for you to share with other guest, and start your private conversation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <GlobalLayout>
                <div
                    className="d-flex flex-row justify-content-center align-items-center"
                    style={{ height: "inherit" }}>
                    <div style={{ width: "100%", maxWidth: "350px" }} className="p-3">
                        <FormRoomCreate />
                        <div className="text-center">
                            <button
                                className="btn btn-link mt-4"
                                type="button"
                                data-toggle="modal"
                                data-target="#HowThisWork">
                                How this works?
                            </button>
                        </div>
                    </div>
                </div>
            </GlobalLayout>
        </React.Fragment>
    )
}

export default RoomCreate
