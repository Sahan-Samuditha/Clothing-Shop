import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Checkout() {

    const {
    cartItems,
    totalPrice,
    clearCart,
    } = useCart();
    const { user } = useAuth();

    const navigate = useNavigate();

    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");

    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");

        if (cartItems.length === 0) {
            setError("Your cart is empty.");
            return;
        }

        console.log("Order details:", {
            customer: user,
            phone,
            address,
            city,
            items: cartItems,
            totalPrice,
        });

        alert("Order placed successfully!");

        clearCart();

        navigate("/");
    };

    if (!user) {
        return (
            <div className="mx-auto max-w-2xl px-6 py-16 text-center">

                <h1 className="text-3xl font-bold">
                    Please Login
                </h1>

                <p className="mt-3 text-gray-500">
                    You need to login before checkout.
                </p>

                <button
                    onClick={() => navigate("/login")}
                    className="mt-6 bg-black px-6 py-3 text-white hover:bg-gray-800"
                >
                    Login
                </button>

            </div>
        );
    }

    if (cartItems.length === 0) {
        return (
            <div className="mx-auto max-w-2xl px-6 py-16 text-center">

                <h1 className="text-3xl font-bold">
                    Your Cart is Empty
                </h1>

                <button
                    onClick={() => navigate("/shop")}
                    className="mt-6 bg-black px-6 py-3 text-white hover:bg-gray-800"
                >
                    Continue Shopping
                </button>

            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 px-6 py-12">

            <div className="mx-auto max-w-6xl">

                <h1 className="text-3xl font-bold">
                    Checkout
                </h1>

                <div className="mt-8 grid gap-8 md:grid-cols-2">

                    {/* Customer Details */}

                    <div className="rounded-lg bg-white p-6 shadow-md">

                        <h2 className="text-xl font-bold">
                            Delivery Details
                        </h2>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-6 space-y-5"
                        >

                            <div>
                                <label className="mb-1 block text-sm font-medium">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    value={user.name}
                                    readOnly
                                    className="w-full rounded border bg-gray-100 px-4 py-3"
                                />
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    value={user.email}
                                    readOnly
                                    className="w-full rounded border bg-gray-100 px-4 py-3"
                                />
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium">
                                    Phone Number
                                </label>

                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Enter phone number"
                                    className="w-full rounded border px-4 py-3 outline-none focus:border-black"
                                    required
                                />
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium">
                                    Address
                                </label>

                                <textarea
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    placeholder="Enter delivery address"
                                    rows="4"
                                    className="w-full rounded border px-4 py-3 outline-none focus:border-black"
                                    required
                                />
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium">
                                    City
                                </label>

                                <input
                                    type="text"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    placeholder="Enter city"
                                    className="w-full rounded border px-4 py-3 outline-none focus:border-black"
                                    required
                                />
                            </div>

                            {error && (
                                <div className="rounded bg-red-100 p-3 text-sm text-red-700">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full bg-black py-3 font-semibold text-white hover:bg-gray-800"
                            >
                                Place Order
                            </button>

                        </form>

                    </div>


                    {/* Order Summary */}

                    <div className="h-fit rounded-lg bg-white p-6 shadow-md">

                        <h2 className="text-xl font-bold">
                            Order Summary
                        </h2>

                        <div className="mt-6 space-y-4">

                            {cartItems.map((item) => (
                                <div
                                    key={item.cartItemId}
                                    className="flex gap-4 border-b pb-4"
                                >

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-20 w-20 rounded object-cover"
                                    />

                                    <div className="flex-1">

                                        <h3 className="font-semibold">
                                            {item.name}
                                        </h3>

                                        <p className="text-sm text-gray-500">
                                            Quantity: {item.quantity}
                                        </p>

                                        {item.selectedSize && (
                                            <p className="text-sm text-gray-500">
                                                Size: {item.selectedSize}
                                            </p>
                                        )}

                                        {item.selectedColor && (
                                            <p className="text-sm text-gray-500">
                                                Color: {item.selectedColor}
                                            </p>
                                        )}

                                        <p className="mt-1 font-semibold">
                                            Rs.{" "}
                                            {(item.price * item.quantity).toLocaleString()}
                                        </p>

                                    </div>

                                </div>
                            ))}

                        </div>

                        <div className="mt-6 flex justify-between border-t pt-5 text-xl font-bold">
                            <span>Total</span>

                            <span>
                                Rs. {totalPrice.toLocaleString()}
                            </span>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Checkout;