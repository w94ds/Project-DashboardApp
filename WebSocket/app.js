const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
})

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
    })

    socket.on('getMessage', message => {
        console.log('getMessage' , message)
        socket.emit('getMessage', message)
    })

    socket.on('getMessageAll', message => {
        console.log('getMessageAll' , message)
        io.sockets.emit('getMessageAll', message)
    })

    socket.on('getMessageLess', message => {
        console.log('getMessageLess' , message)
        socket.broadcast.emit('getMessageLess', message)
    })
});

server.listen(3001, () => {
    console.log("SERVER RUNNING");
})