import uniqid from "uniqid"

const generateUser = {
    id: uniqid(),
    name: `guest-${uniqid()}`,
}

export default generateUser
