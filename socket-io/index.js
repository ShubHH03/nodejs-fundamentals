import express from "express"
import http from "http"
import path from "path"
import { Server } from "socket.io"

const app = express()
const PORT = 9000
const server = http.createServer(app);
const io = new Server(server)

// socket.io
io.on('connection', (socket) => {
  console.log('a new user connected', socket.id);
});

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
    return res.sendFile("/public/index.html")
})

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})