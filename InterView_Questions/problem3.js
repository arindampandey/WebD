let str = "Hello"

let rev_str = ""

for (let i = str.length - 1; i >= 0; i--) {
    rev_str += (str[i])
}

console.log("Orignal String : " ,str)
console.log("Mirror String : ", rev_str)