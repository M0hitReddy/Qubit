const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new socketio.Server(server, {
  cors: {
    origin: "*",
  },
});
data = [];

io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    data = data.filter(user => user !== socket.id);
    // delete connectedSocketIds[socket.id];
    // connectedSocketIds={}
    // io.emit('change names', connectedSocketIds);
    console.log('a user disconnected', socket.id);
    console.log(data);
  });
  socket.on("initialconnection", (initialdata) => {
    data = [...data, initialdata];
    console.log(data);
  });
  socket.on("chat", (payload) => {
    io.emit("chat", { message: payload.message });
  });
});
server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
