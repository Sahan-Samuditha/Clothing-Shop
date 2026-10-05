import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import { useCart } from "../context/CartContext";

function ProductDetails() {

    const { id } = useParams();

    const { addToCart } = useCart();

    const [product, setProduct] = useState(null);

    const [loading, setLoading] = useState(true);

    const [selectedSize, setSelectedSize] = useState("");

    const [selectedColor, setSelectedColor] = useState("");

    const [quantity, setQuantity] = useState(1);


    useEffect(() => {

        const loadProduct = async () => {

            try {

                const response = await axios.get(
                    `http://localhost:5000/api/products/${id}`
                );

                setProduct(response.data);

                // Select first available size/color
                if (response.data.sizes?.length > 0) {
                    setSelectedSize(response.data.sizes[0]);
                }

                if (response.data.colors?.length > 0) {
                    setSelectedColor(response.data.colors[0]);
                }

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }

        };

        loadProduct();

    }, [id]);


    if (loading) {

        return (
            <div className="p-10 text-center">
                Loading product...
            </div>
        );

    }


    if (!product) {

        return (
            <div className="p-10 text-center">

                <h2 className="text-2xl font-bold">
                    Product not found
                </h2>

                <Link
                    to="/shop"
                    className="mt-5 inline-block bg-black px-6 py-3 text-white"
                >
                    Back to Shop
                </Link>

            </div>
        );

    }


    const handleAddToCart = () => {

        addToCart({
            ...product,

            selectedSize,
            selectedColor,

            quantity,
        });

    };


    return (

        <div className="min-h-screen bg-white px-6 py-12">

            <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">


                {/* Product Image */}

                <div>

                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-[600px] w-full object-cover"
                    />

                </div>


                {/* Product Information */}

                <div className="flex flex-col justify-center">

                    <p className="text-sm uppercase tracking-widest text-gray-500">
                        {product.category}
                    </p>


                    <h1 className="mt-3 text-4xl font-bold">
                        {product.name}
                    </h1>


                    <p className="mt-5 text-3xl font-bold">
                        Rs. {product.price.toLocaleString()}
                    </p>


                    <p className="mt-6 leading-7 text-gray-600">
                        {product.description}
                    </p>


                    {/* Size */}

                    <div className="mt-8">

                        <h3 className="font-semibold">
                            Select Size
                        </h3>

                        <div className="mt-3 flex flex-wrap gap-3">

                            {product.sizes.map((size) => (

                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`border px-5 py-2 ${
                                        selectedSize === size
                                            ? "bg-black text-white"
                                            : "hover:bg-gray-100"
                                    }`}
                                >
                                    {size}
                                </button>

                            ))}

                        </div>

                    </div>


                    {/* Color */}

                    <div className="mt-8">

                        <h3 className="font-semibold">
                            Select Color
                        </h3>

                        <div className="mt-3 flex flex-wrap gap-3">

                            {product.colors.map((color) => (

                                <button
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    className={`rounded-full border px-5 py-2 ${
                                        selectedColor === color
                                            ? "bg-black text-white"
                                            : "bg-gray-100"
                                    }`}
                                >
                                    {color}
                                </button>

                            ))}

                        </div>

                    </div>


                    {/* Quantity */}

                    <div className="mt-8">

                        <h3 className="font-semibold">
                            Quantity
                        </h3>

                        <div className="mt-3 flex items-center gap-4">

                            <button
                                onClick={() =>
                                    setQuantity(
                                        Math.max(1, quantity - 1)
                                    )
                                }
                                className="border px-4 py-2"
                            >
                                -
                            </button>

                            <span className="text-lg">
                                {quantity}
                            </span>

                            <button
                                onClick={() =>
                                    setQuantity(
                                        Math.min(
                                            product.stock,
                                            quantity + 1
                                        )
                                    )
                                }
                                className="border px-4 py-2"
                            >
                                +
                            </button>

                        </div>

                    </div>


                    {/* Stock */}

                    <p className="mt-6 text-sm text-gray-500">
                        {product.stock > 0
                            ? `${product.stock} items available`
                            : "Out of stock"}
                    </p>


                    {/* Add To Cart */}

                    <button
                        onClick={handleAddToCart}
                        disabled={product.stock === 0}
                        className="mt-5 w-full bg-black py-4 text-white hover:bg-gray-800 disabled:bg-gray-400"
                    >
                        Add to Cart
                    </button>


                    <Link
                        to="/shop"
                        className="mt-4 text-center underline"
                    >
                        ← Continue Shopping
                    </Link>

                </div>

            </div>

        </div>

    );

}

export default ProductDetails;