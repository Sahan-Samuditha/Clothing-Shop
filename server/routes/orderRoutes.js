const express = require("express");

const {
    createOrder,
    getMyOrders,
} = require("../controllers/orderController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createOrder);

router.get("/my-orders", protect, getMyOrders);

module.exports = router;