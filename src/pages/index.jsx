import * as React from "react"
import { Link } from "gatsby"
import GlobalLayout from "../components/GlobalLayout"
import GlobalHeader from "../components/GlobalHeader"

const Index = () => {
    return (
        <React.Fragment>
            <GlobalHeader />
            <div class="modal fade text-dark" id="HowThisWork" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                                How this works?
                            </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>
                                The "Simple Chat" application powered from{" "}
                                <a
                                    href="https://www.gatsbyjs.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-info">
                                    GatsbyJS
                                </a>
                                ,{" "}
                                <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer" className="text-info">
                                    NodeJS
                                </a>
                                ,{" "}
                                <a
                                    href="https://mongoosejs.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-info">
                                    MongooseJS
                                </a>{" "}
                                and{" "}
                                <a href="https://socket.io/" target="_blank" rel="noreferrer" className="text-info">
                                    socket.io
                                </a>{" "}
                                allow user to create "public" and "private" rooms, with privacy in mind.
                            </p>
                            <p>
                                Which means, we never save your messages on our server, only active chat members who can
                                read your messages during your active session.
                            </p>
                            <p>
                                Thanks to{" "}
                                <a href="https://socket.io/" target="_blank" rel="noreferrer" className="text-info">
                                    socket.io
                                </a>{" "}
                                enables real-time, bidirectional and event-based communication.
                            </p>
                            <p>
                                Have doubts? Check{" "}
                                <a
                                    href="https://github.com/kurtobando/simple-chat"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-info">
                                    Source Code
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <GlobalLayout>
                <div
                    className="d-flex flex-row justify-content-center align-items-center"
                    style={{ height: "inherit" }}>
                    <div className="text-center p-3" style={{ width: "100%", maxWidth: "350px" }}>
                        <Link to="/room-create" className="mt-1 btn btn-block btn-primary">
                            Create Room
                        </Link>
                        <Link to="/room-join" className="mt-1 btn btn-block btn-outline-primary">
                            Join Room
                        </Link>
                        <button
                            className="btn btn-link mt-4"
                            type="button"
                            data-toggle="modal"
                            data-target="#HowThisWork">
                            How this works?
                        </button>
                    </div>
                </div>
            </GlobalLayout>
        </React.Fragment>
    )
}

export default Index
