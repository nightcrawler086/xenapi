const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello Other World!')
})

app.listen(port, () => {
    console.log(`Example app listneing on port ${port}`)
})