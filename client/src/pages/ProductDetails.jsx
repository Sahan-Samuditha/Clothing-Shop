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
            <div className="min-h-screen bg-stone-100 p-10 text-center">
                Loading product...
            </div>
        );

    }


    if (!product) {

        return (
            <div className="min-h-screen bg-stone-100 p-10 text-center">

                <h2 className="text-2xl font-bold">
                    Product not found
                </h2>

                <Link
                    to="/shop"
                    className="mt-5 inline-block rounded-full bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-black"
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

        <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 sm:py-12">

            <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl bg-white p-2 shadow-md md:grid-cols-2 md:gap-8 md:p-3">


                {/* Product Image */}

                <div className="overflow-hidden rounded-xl">

                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-[460px] w-full rounded-xl object-cover transition duration-300 hover:scale-[1.01] sm:h-[600px]"
                    />

                </div>


                {/* Product Information */}

                <div className="flex flex-col justify-center p-6 sm:p-9">

                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                        {product.category}
                    </p>


                    <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                        {product.name}
                    </h1>


                    <p className="mt-5 text-3xl font-bold text-gray-900">
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
                                            ? "border-gray-900 bg-gray-900 text-white shadow-md"
                                            : "border-gray-200 bg-white hover:border-gray-900 hover:bg-gray-50"
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
                                            ? "border-gray-900 bg-gray-900 text-white shadow-md"
                                            : "border-gray-200 bg-gray-100 hover:border-gray-900"
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
                                className="rounded-lg border border-gray-200 bg-white px-4 py-2 transition hover:border-gray-900"
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
                                className="rounded-lg border border-gray-200 bg-white px-4 py-2 transition hover:border-gray-900"
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
                        className="mt-5 w-full rounded-xl bg-gray-900 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-black hover:shadow-xl disabled:bg-gray-400"
                    >
                        Add to Cart
                    </button>


                    <Link
                        to="/shop"
                        className="mt-4 text-center font-medium text-gray-600 transition hover:text-gray-900"
                    >
                        ← Continue Shopping
                    </Link>

                </div>

            </div>

        </div>

    );

}

export default ProductDetails;