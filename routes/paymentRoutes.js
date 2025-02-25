const express = require("express");
const { emitPaymentStatus } = require("../socket");

const router = express.Router();
let paymentStatus = false;

router.post("/make-payment", (req, res) => {
  setTimeout(() => {
    paymentStatus = true;
  }, 20000);

  res.status(200).json({ message: "Payment received, processing request" });
});

router.post("/make-payment-with-socket", (req, res) => {
  const { socketId } = req.body;

  setTimeout(() => {
    emitPaymentStatus(socketId, true);
  }, 10000);

  res.status(200).json({ message: "Payment received, processing request" });
});

router.get("/payment-status", (req, res) => {
  res.status(200).json({ paymentStatus });
});

module.exports = router;
