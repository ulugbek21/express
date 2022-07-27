const express = require('express')
const app = express()
const port = 3000


app.get("/", (req, res) => { // req = request, res = response
    console.log("Working")
    res.send("Hello, World")
})

app.get("/random-number", function (req, res) {
    res.send(Math.random().toString())
})


app.listen(port, function () {
    console.log("Listening to port", port)
})