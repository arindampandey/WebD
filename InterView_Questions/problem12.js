function setAuthToken(token) {
    let expiry = Date.now() + (60 * 60 * 1000)
    let data = {
        token: token,
        expiry: expiry
    }

    localStorage.setItem("authToken", JSON.stringify(data))
}
