const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
const blogs = require('./routes/blogs')

// app.use(express.static("public"))

app.use('/blogs',blogs)

//Middleware 1
app.use((req, res, next) => {
    console.log(req.headers)
    req.myrequest = "Hello Sir"

    fs.appendFileSync("new.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("Middleware 1")
    next() // if next is not used then no response , server will stuckk .
})

//Middleware 2
app.use((req, res, next) => {
    req.myrequest = "Byee Sir"

    console.log('m2')
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello about!'+ req.myrequest)
})

app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
