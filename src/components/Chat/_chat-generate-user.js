import uniqid from "uniqid"

const chatGenerateUser = {
    id: uniqid(),
    name: `guest-${uniqid()}`,
}

export default chatGenerateUser
