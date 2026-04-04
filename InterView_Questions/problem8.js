async function double(arr) {
    return arr.map(num => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(num * 2)
            },500)
        })
    })
}

let result = double([1, 2, 3])
console.log(result)  