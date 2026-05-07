// CRUD Operations
use("crudDB")

// Create
// db.createCollection("cources")

// db.cources.insertOne({
//     name: "My Course",
//     price: "0",
//     Rating: "10"
// })

// db.cources.insertMany([
//     { "name": "Web Development Bootcamp", "price": "0", "Rating": "9" },
//     { "name": "Python Basics", "price": "1200", "Rating": "8" },
//     { "name": "JavaScript Mastery", "price": "0", "Rating": "10" },
//     { "name": "C++ Programming", "price": "0", "Rating": "7" },
//     { "name": "Data Structures & Algorithms", "price": "2200", "Rating": "10" },
//     { "name": "React JS Course", "price": "2000", "Rating": "9" },
//     { "name": "Machine Learning Intro", "price": "2500", "Rating": "8" },
//     { "name": "UI/UX Design Basics", "price": "1300", "Rating": "7" },
//     { "name": "Full Stack Development", "price": "3000", "Rating": "10" },
//     { "name": "Cyber Security Fundamentals", "price": "1700", "Rating": "8" }
// ])

// Read 

// let a = db.cources.find({price : "0"})
// console.log(a)
// console.log(a.count())
// console.log(a.toArray())

let b = db.cources.findOne({ price: "1500" })
console.log(b)

// Update 
db.cources.updateOne({ price: "0" }, { $set: { price: "1000" } })

db.cources.updateMany({ price: "0" }, { $set: { price: "1500" } })

// Delete 

db.cources.deleteOne({price : "0"})
db.cources.deleteMany({price : "2000"})
