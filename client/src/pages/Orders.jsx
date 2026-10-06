import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

function Orders() {

    const { user } = useAuth();
    const navigate = useNavigate();

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchOrders = async () => {

            try {
                const token = localStorage.getItem("token");

                const response = await axios.get(
                    "http://localhost:5000/api/orders/my-orders",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                setOrders(response.data);

            } catch (error) {

                console.error(error);

                setError(
                    error.response?.data?.message ||
                    "Failed to load orders"
                );

            } finally {
                setLoading(false);
            }
        };

        if (user) {
            fetchOrders();
        } else {
            setLoading(false);
        }

    }, [user]);


    if (!user) {
        return (
            <div className="min-h-screen px-6 py-20 text-center">

                <h1 className="text-3xl font-bold">
                    Please Login
                </h1>

                <p className="mt-3 text-gray-500">
                    You need to login to view your orders.
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


    if (loading) {
        return (
            <div className="min-h-screen px-6 py-20 text-center">
                <p className="text-gray-500">
                    Loading your orders...
                </p>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-gray-50 px-6 py-12">

            <div className="mx-auto max-w-5xl">

                <h1 className="text-3xl font-bold">
                    My Orders
                </h1>

                {error && (
                    <div className="mt-6 rounded bg-red-100 p-4 text-red-700">
                        {error}
                    </div>
                )}


                {!error && orders.length === 0 && (
                    <div className="mt-10 rounded-lg bg-white p-10 text-center shadow-sm">

                        <h2 className="text-2xl font-semibold">
                            No Orders Yet
                        </h2>

                        <p className="mt-3 text-gray-500">
                            You haven't placed any orders yet.
                        </p>

                        <button
                            onClick={() => navigate("/shop")}
                            className="mt-6 bg-black px-6 py-3 text-white hover:bg-gray-800"
                        >
                            Start Shopping
                        </button>

                    </div>
                )}


                <div className="mt-8 space-y-6">

                    {orders.map((order) => (

                        <div
                            key={order._id}
                            className="rounded-lg bg-white p-6 shadow-sm"
                        >

                            {/* Order Header */}

                            <div className="flex flex-col justify-between gap-3 border-b pb-5 md:flex-row">

                                <div>

                                    <p className="text-sm text-gray-500">
                                        Order ID
                                    </p>

                                    <p className="font-semibold">
                                        {order._id}
                                    </p>

                                </div>


                                <div>

                                    <p className="text-sm text-gray-500">
                                        Date
                                    </p>

                                    <p className="font-semibold">
                                        {new Date(
                                            order.createdAt
                                        ).toLocaleDateString()}
                                    </p>

                                </div>


                                <div>

                                    <p className="text-sm text-gray-500">
                                        Status
                                    </p>

                                    <span className="inline-block rounded bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                                        {order.status}
                                    </span>

                                </div>

                            </div>


                            {/* Products */}

                            <div className="mt-5 space-y-4">

                                {order.items.map((item, index) => (

                                    <div
                                        key={`${order._id}-${index}`}
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

                                            {item.size && (
                                                <p className="text-sm text-gray-500">
                                                    Size: {item.size}
                                                </p>
                                            )}

                                            {item.color && (
                                                <p className="text-sm text-gray-500">
                                                    Color: {item.color}
                                                </p>
                                            )}

                                        </div>

                                        <p className="font-semibold">
                                            Rs.{" "}
                                            {(
                                                item.price *
                                                item.quantity
                                            ).toLocaleString()}
                                        </p>

                                    </div>

                                ))}

                            </div>


                            {/* Shipping */}

                            <div className="mt-5 border-b pb-5">

                                <h3 className="font-semibold">
                                    Delivery Details
                                </h3>

                                <p className="mt-2 text-sm text-gray-600">
                                    {order.shippingAddress.address}
                                </p>

                                <p className="text-sm text-gray-600">
                                    {order.shippingAddress.city}
                                </p>

                                <p className="text-sm text-gray-600">
                                    Phone:{" "}
                                    {order.shippingAddress.phone}
                                </p>

                            </div>


                            {/* Total */}

                            <div className="mt-5 flex justify-between text-xl font-bold">

                                <span>
                                    Total
                                </span>

                                <span>
                                    Rs.{" "}
                                    {order.totalPrice.toLocaleString()}
                                </span>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}

export default Orders;