import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
    const {
        cartItems,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        totalPrice,
    } = useCart();

    const navigate = useNavigate();

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 px-8 py-20 text-center">

                <div className="mx-auto max-w-lg rounded-2xl bg-white p-10 shadow-md">
                <h1 className="text-4xl font-bold tracking-tight">
                    Your Cart is Empty
                </h1>

                <p className="mt-4 text-gray-500">
                    You haven't added any products yet.
                </p>

                <Link
                    to="/shop"
                    className="mt-8 inline-block rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition hover:bg-black"
                >
                    Continue Shopping
                </Link>
                </div>

            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-8 sm:py-12">

            <div className="mx-auto max-w-6xl">

                <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                    STYLEHUB
                </p>
                <h1 className="mt-2 text-4xl font-bold tracking-tight">
                    Shopping Cart
                </h1>
                <p className="mt-2 text-gray-500">
                    Review your selected items before checkout.
                </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">

                    {/* Cart Items */}

                    <div className="space-y-5 lg:col-span-2">

                        {cartItems.map((item) => (
                            <div
                                key={item.cartItemId}
                                className="flex gap-4 rounded-2xl bg-white p-4 shadow-md transition hover:shadow-lg sm:gap-5 sm:p-5"
                            >

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-28 w-24 rounded-xl object-cover sm:h-32 sm:w-28"
                                />

                                <div className="flex flex-1 flex-col justify-between">

                                    <div>

                                        <h2 className="text-lg font-semibold tracking-tight">
                                            {item.name}
                                        </h2>

                                        {item.selectedSize && (
                                            <p className="mt-1 text-sm text-gray-500">
                                                Size: {item.selectedSize}
                                            </p>
                                        )}

                                        {item.selectedColor && (
                                            <p className="text-sm text-gray-500">
                                                Color: {item.selectedColor}
                                            </p>
                                        )}

                                        <p className="mt-1 text-gray-500">
                                            Rs. {item.price.toLocaleString()}
                                        </p>

                                    </div>

                                    <div className="flex items-center gap-3">

                                        <button
                                            onClick={() =>
                                                decreaseQuantity(item.cartItemId)
                                            }
                                            className="rounded-lg border border-gray-200 px-3 py-1 transition hover:border-gray-900"
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
                                            className="rounded-lg border border-gray-200 px-3 py-1 transition hover:border-gray-900"
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
                                        className="text-sm font-medium text-red-500 transition hover:text-red-700"
                                    >
                                        Remove
                                    </button>

                                </div>

                            </div>
                        ))}

                    </div>

                    {/* Summary */}

                    <div className="h-fit rounded-2xl bg-white p-6 shadow-md lg:sticky lg:top-24">

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
                            onClick={() => navigate("/checkout")}
                            className="mt-6 w-full rounded-xl bg-gray-900 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-black hover:shadow-lg"
                        >
                            Proceed to Checkout
                        </button>

                        <Link
                            to="/shop"
                            className="mt-4 block text-center font-medium text-gray-600 transition hover:text-gray-900"
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