const helperAxiosErrorHandler = (error) => {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("[axios][data]", error.response.data)
        console.log("[axios][status]", error.response.status)
        console.log("[axios][headers]", error.response.headers)
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the
        // browser and an instance of
        // http.ClientRequest in node.js
        console.log("[axios][request]", error.request)
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log("[axios][message]", error.message)
    }
    // always show the config
    console.log("[axios][config]", error.config)
}

export default helperAxiosErrorHandler
