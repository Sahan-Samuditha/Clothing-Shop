const dotenv = require("dotenv");
const mongoose = require("mongoose");

const Product = require("./models/Product");

dotenv.config();

const products = [
    {
        name: "Classic T-Shirt",
        description: "Comfortable cotton T-shirt for everyday wear.",
        price: 2500,
        category: "Men",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "White", "Blue"],
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
        stock: 20,
    },

    {
        name: "Oversized T-Shirt",
        description: "Modern oversized T-shirt with a comfortable fit.",
        price: 3200,
        category: "Men",
        sizes: ["M", "L", "XL"],
        colors: ["Black", "Grey", "White"],
        image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1",
        stock: 15,
    },

    {
        name: "Cargo Pants",
        description: "Stylish cargo pants suitable for casual outfits.",
        price: 4500,
        category: "Men",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Green", "Beige"],
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
        stock: 12,
    },

    {
        name: "Denim Jacket",
        description: "Classic denim jacket for a stylish casual look.",
        price: 6500,
        category: "Men",
        sizes: ["M", "L", "XL"],
        colors: ["Blue", "Black"],
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
        stock: 10,
    },

    {
        name: "Women's Casual Dress",
        description: "Simple and elegant dress for everyday wear.",
        price: 5500,
        category: "Women",
        sizes: ["S", "M", "L"],
        colors: ["Black", "White", "Pink"],
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8",
        stock: 18,
    },

    {
        name: "Women's Jeans",
        description: "Comfortable slim-fit jeans for everyday use.",
        price: 4800,
        category: "Women",
        sizes: ["28", "30", "32", "34"],
        colors: ["Blue", "Black"],
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
        stock: 14,
    },

    {
        name: "Hoodie",
        description: "Warm and comfortable hoodie for casual outfits.",
        price: 6000,
        category: "Unisex",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Grey", "White"],
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
        stock: 16,
    },

    {
        name: "Sneakers",
        description: "Modern sneakers suitable for everyday use.",
        price: 7500,
        category: "Accessories",
        sizes: ["7", "8", "9", "10"],
        colors: ["Black", "White"],
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        stock: 10,
    },
];

const seedProducts = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected");

        await Product.deleteMany();

        await Product.insertMany(products);

        console.log("Products added successfully");

        await mongoose.connection.close();

        console.log("Database connection closed");

        process.exit(0);
    } catch (error) {
        console.error("Error adding products:");
        console.error(error.message);

        process.exit(1);
    }
};

seedProducts();