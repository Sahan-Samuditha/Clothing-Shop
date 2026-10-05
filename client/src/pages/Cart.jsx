import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
    const {
        cartItems,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        totalPrice,
    } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen px-8 py-20 text-center">

                <h1 className="text-4xl font-bold">
                    Your Cart is Empty
                </h1>

                <p className="mt-4 text-gray-500">
                    You haven't added any products yet.
                </p>

                <Link
                    to="/shop"
                    className="mt-8 inline-block bg-black px-8 py-3 text-white"
                >
                    Continue Shopping
                </Link>

            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 px-8 py-12">

            <div className="mx-auto max-w-6xl">

                <h1 className="mb-10 text-4xl font-bold">
                    Shopping Cart
                </h1>

                <div className="grid gap-8 lg:grid-cols-3">

                    {/* Cart Items */}

                    <div className="space-y-5 lg:col-span-2">

                        {cartItems.map((item) => (
                            <div
                                key={item._id}
                                className="flex gap-5 rounded-lg bg-white p-5 shadow-sm"
                            >

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-32 w-28 object-cover"
                                />

                                <div className="flex flex-1 flex-col justify-between">

                                    <div>

                                        <h2 className="text-lg font-semibold">
                                            {item.name}
                                        </h2>
                                        <p className="mt-1 text-sm text-gray-500">
                                                        Size: {item.selectedSize}
                                            </p>

                                            <p className="text-sm text-gray-500">
                                                 Color: {item.selectedColor}
                                            </p>
                                            
                                        <p className="mt-1 text-gray-500">
                                            Rs. {item.price.toLocaleString()}
                                        </p>

                                    </div>

                                    <div className="flex items-center gap-3">

                                        <button
                                            onClick={() =>
                                                decreaseQuantity(item.cartItemId)
                                            }
                                            className="border px-3 py-1"
                                        >
                                            -
                                        </button>

                                        <span>
                                            {item.quantity}
                                        </span>

                                        <button
                                            onClick={() =>
                                                increaseQuantity(item.cartItemId)
                                            }
                                            className="border px-3 py-1"
                                        >
                                            +
                                        </button>

                                    </div>

                                </div>

                                <div className="flex flex-col items-end justify-between">

                                    <p className="font-bold">
                                        Rs.{" "}
                                        {(
                                            item.price *
                                            item.quantity
                                        ).toLocaleString()}
                                    </p>

                                    <button
                                        onClick={() =>
                                            removeFromCart(item.cartItemId)
                                        }
                                        className="text-sm text-red-500"
                                    >
                                        Remove
                                    </button>

                                </div>

                            </div>
                        ))}

                    </div>

                    {/* Summary */}

                    <div className="h-fit rounded-lg bg-white p-6 shadow-sm">

                        <h2 className="text-2xl font-bold">
                            Order Summary
                        </h2>

                        <div className="mt-6 flex justify-between">
                            <span>Subtotal</span>

                            <span>
                                Rs. {totalPrice.toLocaleString()}
                            </span>
                        </div>

                        <div className="my-5 border-t"></div>

                        <div className="flex justify-between text-xl font-bold">

                            <span>Total</span>

                            <span>
                                Rs. {totalPrice.toLocaleString()}
                            </span>

                        </div>

                        <button
                            className="mt-6 w-full bg-black py-4 text-white"
                        >
                            Proceed to Checkout
                        </button>

                        <Link
                            to="/shop"
                            className="mt-4 block text-center underline"
                        >
                            Continue Shopping
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Cart;