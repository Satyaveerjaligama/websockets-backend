const express = require("express");
const cors = require("cors");
const http = require("http");
const { setupSocket } = require("./socket");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();
const server = http.createServer(app);

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

app.use("/api/payments", paymentRoutes);

setupSocket(server);

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
