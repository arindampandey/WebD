let a = [2, 2, 6, 3, 3, 1, 9, 2, 2]

let result = []

for (let i = 0; i < a.length; i++) {
    if (i === 0) {
        result.push(a[i] * 2)
    }
    else if (a[i] === a[i - 1]) {
        result.push(a[i])
    }
    else {
        result.push(a[i] * 2)
    }
}

console.log(result)