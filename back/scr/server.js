const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const PORTA = 8080;

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*", // Ou seu domínio ex: 'http://localhost:5173'
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log("Novo cliente conectado");

  // Quando uma mensagem for recebida
  socket.on("message", (data) => {
    console.log("Mensagem recebida:", data);
    socket.broadcast.emit("message", data); // Envia para todos, menos para quem enviou
  });

  socket.on("disconnect", () => {
    console.log("Cliente desconectado");
  });
});

server.listen(PORTA, () => {
  console.log(`Servidor Socket.io ouvindo na porta ${PORTA}`);
});
