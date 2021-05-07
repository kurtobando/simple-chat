import React from "react"
import FormRoomJoin from "../components/FormRoomJoin/FormRoomJoin"
import GlobalLayout from "../components/GlobalLayout"
import GlobalHeader from "../components/GlobalHeader"

const RoomJoin = () => {
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
                                Place the provided <span className="text-info">unique room id </span> to the input
                                field, and click on <span className="text-info">Join</span> to start your private
                                conversation.
                            </p>
                            <p>
                                Do not have a <span className="text-info">unique room id </span>?{" "}
                                <span className="text-info">Create one instead</span>.
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
                        <FormRoomJoin />
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

export default RoomJoin
