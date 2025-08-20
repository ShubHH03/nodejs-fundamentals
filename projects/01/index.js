const express = require ("express")
const users = require("./MOCK_DATA.json")

const app = express()
const PORT = 8000

app.get("/api/users", (req, res) => {
    return res.json(users);
}) 

app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
}) 

app.get("/api/users/name/:first_name", (req, res) => {
    const first_name = req.params.first_name;
    const user = users.find((user) => user.first_name === first_name);
    return res.json(user);
}) 

app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}\n`);
})