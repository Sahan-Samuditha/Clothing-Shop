const Product = require("../models/Product");

// Get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();

        res.json(products);
    } catch (error) {
        res.status(500).json({
            message: "Failed to get products",
            error: error.message,
        });
    }
};

// Get single product
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found",
            });
        }

        res.json(product);
    } catch (error) {
        res.status(500).json({
            message: "Failed to get product",
            error: error.message,
        });
    }
};

// Create product
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);

        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({
            message: "Failed to create product",
            error: error.message,
        });
    }
};

module.exports = {
    getProducts,
    getProductById,
    createProduct,
};