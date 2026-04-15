const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const Employee = require("./models/employee")

conn = mongoose.connect('mongodb://127.0.0.1:27017/company');

app.set('view engine', 'ejs')

const getRandom = (arr) => {
    let rn = Math.floor(Math.random() * (arr.length - 1))
    return arr[rn]
}
let names = [
    "Arindam", "Rohan", "Priya", "Amit", "Sneha",
    "Karan", "Neha", "Rahul", "Anjali", "Vikas"
];

let cities = [
    "Bhopal", "Delhi", "Mumbai", "Pune", "Indore",
    "Bangalore", "Hyderabad", "Chennai", "Jaipur", "Kolkata"
];

let languages = [
    "C", "C++", "Java", "Python", "JavaScript",
    "Go", "Rust", "PHP", "Swift", "Kotlin"
];
app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' })
})

app.get('/generate', async (req, res) => {
    //Delete Employees
    await Employee.deleteMany({})
    // Generating Random Data
    for (let i = 0; i < 10; i++) {
        let e = await Employee.create({
            name: getRandom(names),
            salary: Math.floor(Math.random()*20000),
            language: getRandom(languages),
            city: getRandom(cities),
            isManager: (Math.random() > 0.5 ? true : false)
        })
        console.log(e)
    }
    res.render('index', { foo: 'FOO' })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
