import fs from "fs/promises"

let a = await fs.readFile("My1.txt")

let b = await fs.writeFile("My1.txt","\n\n\n\n\n\nThis is an amazing promise")

console.log(a.toString(),b)