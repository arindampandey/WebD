const express = require('express')
const app = express()
const port = 3000

app.use(express.static(`public`))

// app.get or app.post or app.put or app.delete(path,handler)
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/home', (req, res) => {
    res.send('Hello home!')
})
app.get('/contact', (req, res) => {
    res.send('contact me')
})

app.get('/blog', (req, res) => {
    res.send('read my blog')
})
app.get('/blog/:slug', (req, res) => {
    // fetch slug from the js
    console.log(req.params)
    console.log(req.query)
    res.send(`Hello welcome to my ${req.params.slug}`)
})


// // fetch intro to js from the db
// app.get('/blog/intro-to-js', (req, res) => {
//     res.send('read my blog intro-to-js')
// })
// // fetch intro to python from the db
// app.get('/blog/intro-to-python', (req, res) => {
//     res.send('read my blog intro-to-python')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
