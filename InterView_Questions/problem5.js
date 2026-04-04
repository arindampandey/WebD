let a = [3, 2, 6, 2, 1, -3, 99]

let sum = 0
for (let i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        sum = sum + a[i]
    }
    else {
        break
    }
}

console.log("Sum : ", sum)
