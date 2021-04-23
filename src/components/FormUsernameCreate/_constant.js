export const USER_NAME = {
    name: "user-name",
    placeholder: "Username",
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
                value: /^[\w.-]+$/,
                message: "accepted characters are 0-9, a-z, period (.), and hyphen (-) only",
            },
        }
    },
}
