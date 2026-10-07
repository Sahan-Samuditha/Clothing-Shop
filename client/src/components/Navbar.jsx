import { Link, NavLink, useNavigate } from "react-router-dom";
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
        <nav className="border-b bg-gray-100/50 backdrop-blur-xl">

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

                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `rounded-full border px-4 py-2 backdrop-blur-xl transition-all duration-300 ${
                                isActive
                                    ? "border-gray-900/20 bg-white/75 text-gray-900 shadow-[0_12px_28px_rgba(15,23,42,0.16),inset_0_1px_0_rgba(255,255,255,1)]"
                                    : "border-white/70 bg-white/35 shadow-[0_8px_24px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] hover:-translate-y-0.5 hover:bg-white/55 hover:text-gray-600 hover:shadow-[0_12px_28px_rgba(15,23,42,0.12),inset_0_1px_0_rgba(255,255,255,1)]"
                            }`
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/shop"
                        className={({ isActive }) =>
                            `rounded-full border px-4 py-2 backdrop-blur-xl transition-all duration-300 ${
                                isActive
                                    ? "border-gray-900/20 bg-white/75 text-gray-900 shadow-[0_12px_28px_rgba(15,23,42,0.16),inset_0_1px_0_rgba(255,255,255,1)]"
                                    : "border-white/70 bg-white/35 shadow-[0_8px_24px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] hover:-translate-y-0.5 hover:bg-white/55 hover:text-gray-600 hover:shadow-[0_12px_28px_rgba(15,23,42,0.12),inset_0_1px_0_rgba(255,255,255,1)]"
                            }`
                        }
                    >
                        Shop
                    </NavLink>

                    <NavLink
                        to="/shop?category=Men"
                        className={({ isActive }) =>
                            `rounded-full border px-4 py-2 backdrop-blur-xl transition-all duration-300 ${
                                isActive
                                    ? "border-gray-900/20 bg-white/75 text-gray-900 shadow-[0_12px_28px_rgba(15,23,42,0.16),inset_0_1px_0_rgba(255,255,255,1)]"
                                    : "border-white/70 bg-white/35 shadow-[0_8px_24px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] hover:-translate-y-0.5 hover:bg-white/55 hover:text-gray-600 hover:shadow-[0_12px_28px_rgba(15,23,42,0.12),inset_0_1px_0_rgba(255,255,255,1)]"
                            }`
                        }
                    >
                        Men
                    </NavLink>

                    <NavLink
                        to="/shop?category=Women"
                        className={({ isActive }) =>
                            `rounded-full border px-4 py-2 backdrop-blur-xl transition-all duration-300 ${
                                isActive
                                    ? "border-gray-900/20 bg-white/75 text-gray-900 shadow-[0_12px_28px_rgba(15,23,42,0.16),inset_0_1px_0_rgba(255,255,255,1)]"
                                    : "border-white/70 bg-white/35 shadow-[0_8px_24px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] hover:-translate-y-0.5 hover:bg-white/55 hover:text-gray-600 hover:shadow-[0_12px_28px_rgba(15,23,42,0.12),inset_0_1px_0_rgba(255,255,255,1)]"
                            }`
                        }
                    >
                        Women
                    </NavLink>

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
                            <img
                                src="https://img.icons8.com/ios-filled/24/000000/shopping-cart.png"
                                alt="cart"
                            />
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