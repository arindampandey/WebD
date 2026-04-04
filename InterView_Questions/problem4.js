let password = "Mypasss123"

let has_8digit = false
let has_uppercase = false
let has_lowercase = false
let has_digit = false

for (i = 0; i < password.length; i++) {
    if (password.length >= 8) {
        has_8digit = true
    }
    if (password[i] >= 'A' && password[i] <= 'Z') {
        has_uppercase = true
    }
    if (password[i] >= 'a' && password[i] <= 'z') {
        has_lowercase = true
    }
    if (password[i] >= '0' && password[i] <= '9') {
        has_digit = true
    }
}

if (has_8digit && has_digit && has_lowercase && has_uppercase) {
    console.log("Password is valid!!")
}
else {
    console.log("Password is invalid!!")
}