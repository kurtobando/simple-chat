export const ROOM_NAME = {
    name: "room-name",
    placeholder: "Room Name",
    validationRules: () => {
        const MAX = 20
        const MIN = 5

        return {
            required: {
                value: true,
                message: "is required",
            },
            minLength: {
                value: MIN,
                message: `minimum ${MIN} characters`,
            },
            maxLength: {
                value: MAX,
                message: `maximum ${MAX} characters`,
            },
        }
    },
}

export const ROOM_DESCRIPTION = {
    name: "room-description",
    placeholder: "Room Description",
    validationRules: function () {
        const MAX = 50
        const MIN = 5

        return {
            required: {
                value: true,
                message: "is required",
            },
            minLength: {
                value: MIN,
                message: `minimum ${MIN} characters`,
            },
            maxLength: {
                value: MAX,
                message: `maximum ${MAX} characters`,
            },
        }
    },
}

export const ROOM_UNIQUE_ID = {
    name: "room-unique-id",
    placeholder: "Room Unique ID",
}

export const ROOM_ENABLE_PASSWORD = {
    name: "room-enable-password",
    placeholder: "Room Enable Password?",
}

export const ROOM_PASSWORD = {
    name: "room-password",
    placeholder: "Room Password",
    validationRules: function () {
        const MAX = 50
        const MIN = 5

        return {
            minLength: {
                value: MIN,
                message: `minimum ${MIN} characters`,
            },
            maxLength: {
                value: MAX,
                message: `maximum ${MAX} characters`,
            },
        }
    },
}

export const ROOM_RETYPE_PASSWORD = {
    name: "room-retype-password",
    placeholder: "Re-type Room Password",
    validationRules: function () {
        const MAX = 50
        const MIN = 5

        return {
            minLength: {
                value: MIN,
                message: `minimum ${MIN} characters`,
            },
            maxLength: {
                value: MAX,
                message: `maximum ${MAX} characters`,
            },
        }
    },
}
