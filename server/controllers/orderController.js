const Order = require("../models/Order");

// Create new order
const createOrder = async (req, res) => {
    try {
        const {
            items,
            phone,
            address,
            city,
            totalPrice,
        } = req.body;

        if (
            !items ||
            items.length === 0 ||
            !phone ||
            !address ||
            !city ||
            totalPrice === undefined
        ) {
            return res.status(400).json({
                message: "Please provide all order details",
            });
        }

        const orderItems = items.map((item) => ({
            product: item._id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            size: item.selectedSize,
            color: item.selectedColor,
            image: item.image,
        }));

        const order = await Order.create({
            user: req.user.id,

            items: orderItems,

            shippingAddress: {
                phone,
                address,
                city,
            },

            totalPrice,
        });

        res.status(201).json({
            message: "Order created successfully",
            order,
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to create order",
            error: error.message,
        });
    }
};


// Get logged-in user's orders
const getMyOrders = async (req, res) => {
    try {
        const orders = await Order.find({
            user: req.user.id,
        })
            .populate("items.product")
            .sort({ createdAt: -1 });

        res.json(orders);

    } catch (error) {
        res.status(500).json({
            message: "Failed to get orders",
            error: error.message,
        });
    }
};


module.exports = {
    createOrder,
    getMyOrders,
};