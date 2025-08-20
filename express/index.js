const express = require("express")

const app = express();
const port = 3000

app.get("/", (req, res) => {
    res.send("Hello from Home Page")
})

app.get("/about", (req, res) => {
    res.send(`Hello ${req.query.name}`)
    // res.send("Hello from About Page, " + req.query.name)
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);;
})

