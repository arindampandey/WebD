let str = "AsianPaintsOG"

let vowel = ['a', 'e', 'i', 'o', 'u']
let count = 0
str = str.toLowerCase()

for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i])) {
        count++
    }
}

console.log("Number of vowels : ", count)