const fs = require("fs")

console.log(fs)

// console.log("Strat")
// fs.writeFileSync("My.txt", "Hello , How are you !!")
// console.log("End")


fs.writeFile("My1.txt", "Hello , How are you !!", () => {
    console.log("Done")
    fs.readFile("My1.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})

fs.appendFile("My1.txt","Hiiiiii",(e,d)=>{
    console.log(d)
})

console.log("End")