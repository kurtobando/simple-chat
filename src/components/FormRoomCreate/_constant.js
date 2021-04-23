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
            pattern: {
                value: /^[\w\s]+$/,
                message: "accepted characters are 0-9, a-z, and space only",
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
            pattern: {
                value: /^[\w\s]+$/,
                message: "accepted characters are 0-9, a-z, and space only",
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
    validationRules: function (isEnabledPassword) {
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
            pattern: {
                value: /^[\w.-]+$/,
                message: "accepted characters are 0-9, a-z, period (.), and hyphen (-) only",
            },
            validate: {
                passwordEmpty: (value) => {
                    if (isEnabledPassword === true && value.length === 0) {
                        return "empty password"
                    }
                    return true
                },
            },
        }
    },
}

export const ROOM_RETYPE_PASSWORD = {
    name: "room-retype-password",
    placeholder: "Re-type Room Password",
    validationRules: function (password, retypePassword, isEnabledPassword) {
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
            pattern: {
                value: /^[\w.-]+$/,
                message: "accepted characters are 0-9, a-z, period (.), and hyphen (-) only",
            },
            validate: {
                passwordEmpty: (value) => {
                    if (isEnabledPassword === true && value.length === 0) {
                        return "empty password"
                    }
                    return true
                },
                passwordDidNotMatch: () => {
                    if (isEnabledPassword === true && password !== retypePassword) {
                        return "password did not match"
                    }
                    return true
                },
            },
        }
    },
}
