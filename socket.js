const { Server } = require("socket.io");

let io;

const setupSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
    },
  });

  io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);
    socket.emit("socket-id", socket.id);

    socket.on("disconnect", () =>
      console.log(`User disconnected: ${socket.id}`)
    );
  });
};

const emitPaymentStatus = (socketId, status) => {
  if (io) io.to(socketId).emit("payment-status", status);
};

module.exports = { setupSocket, emitPaymentStatus };
