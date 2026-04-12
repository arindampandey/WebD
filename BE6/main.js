const express = require('express')
const { serialize } = require('node:v8')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    let sitename = "Gucci"
    let search = "Search Now"
    let arr = [11,22,33]
    res.render("index", { sitename: sitename, search: search ,arr})
})

app.get('/blog/:slug', (req, res) => {
    let blogtitle = "Gucci is a good brand ?"
    let blogcontent = "Yes absolutely good enough !!"
    res.render("blogpost", { root: __dirname })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
