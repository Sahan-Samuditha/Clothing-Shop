import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Navbar() {

    const { totalItems } = useCart();
    const { user, logout } = useAuth();

    const navigate = useNavigate();


    const handleLogout = () => {

        logout();

        navigate("/");

    };


    return (
        <nav className="border-b bg-white">

            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

                {/* Logo */}

                <Link
                    to="/"
                    className="text-2xl font-bold tracking-wide"
                >
                    STYLEHUB
                </Link>


                {/* Main Navigation */}

                <div className="hidden gap-8 md:flex">

                    <Link
                        to="/"
                        className="hover:text-gray-500"
                    >
                        Home
                    </Link>

                    <Link
                        to="/shop"
                        className="hover:text-gray-500"
                    >
                        Shop
                    </Link>

                    <Link
                        to="/shop?category=Men"
                        className="hover:text-gray-500"
                    >
                        Men
                    </Link>

                    <Link
                         to="/shop?category=Women"
                        className="hover:text-gray-500"
                    >
                        Women
                    </Link>

                </div>


                {/* Account + Cart */}

                <div className="flex items-center gap-5">

                    {user ? (

                        <>
                        <Link
                                 to="/profile"
                                 className="hidden text-sm hover:text-gray-500 md:block"
                                >
                         Hi, {user.name}
                        </Link>
                        <Link
                            to="/orders"
                           className="hidden text-sm hover:text-gray-500 md:block"
                        >
                           My Orders
                        </Link>

                            <button
                                onClick={handleLogout}
                                className="text-sm hover:text-gray-500"
                            >
                                Logout
                            </button>
                        </>

                    ) : (

                        <>
                            <Link
                                to="/login"
                                className="text-sm hover:text-gray-500"
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                className="text-sm hover:text-gray-500"
                            >
                                Register
                            </Link>
                        </>

                    )}


                    {/* Cart */}

                    <Link
                        to="/cart"
                        className="relative flex items-center gap-2"
                    >

                        <span className="text-xl">
                            🛒
                        </span>

                        <span className="hidden md:block">
                            Cart
                        </span>

                        {totalItems > 0 && (

                            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-black px-1 text-xs text-white">
                                {totalItems}
                            </span>

                        )}

                    </Link>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;