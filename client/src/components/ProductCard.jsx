import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {

    const { addToCart } = useCart();

    return (
        <div className="overflow-hidden rounded-lg bg-white shadow-md">

            <Link to={`/product/${product._id}`}>

                <img
                    src={product.image}
                    alt={product.name}
                    className="h-72 w-full object-cover transition duration-300 hover:scale-105"
                />

            </Link>

            <div className="p-5">

                <p className="text-sm text-gray-500">
                    {product.category}
                </p>

                <Link to={`/product/${product._id}`}>

                    <h3 className="mt-1 text-lg font-semibold hover:text-gray-500">
                        {product.name}
                    </h3>

                </Link>

                <p className="mt-2 text-xl font-bold">
                    Rs. {product.price.toLocaleString()}
                </p>

                <button
                    onClick={() => addToCart(product)}
                    className="mt-4 w-full bg-black py-3 text-white hover:bg-gray-800"
                >
                    Add to Cart
                </button>

            </div>

        </div>
    );
}

export default ProductCard;