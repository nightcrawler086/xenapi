const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000
var morgarn = require('morgan')

app.use(morgan('short'))

app.get('/', (req, res) => {
    res.send('Hello Other World!')
})

app.listen(port, () => {
    console.log(`Example app listneing on port ${port}`)
})