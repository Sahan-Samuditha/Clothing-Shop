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
        <nav className="sticky top-0 z-50 border-b border-white/60 bg-gray-100/55 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl">

            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">

                {/* Logo */}

                <Link
                    to="/"
                    className="shrink-0 text-xl font-black tracking-[0.18em] text-gray-900 transition-transform duration-300 hover:scale-[1.03] sm:text-2xl"
                >
                    STYLE<span className="text-gray-500">HUB</span>
                </Link>


                {/* Main Navigation */}

                <div className="hidden items-center gap-2 rounded-full border border-white/60 bg-white/25 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] md:flex">

                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-xl transition-all duration-300 ${
                                isActive
                                    ? "border-gray-900/10 bg-white/85 text-gray-900 shadow-[0_5px_14px_rgba(15,23,42,0.12)]"
                                    : "border-transparent text-gray-600 hover:border-white/70 hover:bg-white/55 hover:text-gray-900"
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
                                    ? "border-gray-900/10 bg-white/85 text-gray-900 shadow-[0_5px_14px_rgba(15,23,42,0.12)]"
                                    : "border-transparent text-gray-600 hover:border-white/70 hover:bg-white/55 hover:text-gray-900"
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
                                    ? "border-gray-900/10 bg-white/85 text-gray-900 shadow-[0_5px_14px_rgba(15,23,42,0.12)]"
                                    : "border-transparent text-gray-600 hover:border-white/70 hover:bg-white/55 hover:text-gray-900"
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
                                    ? "border-gray-900/10 bg-white/85 text-gray-900 shadow-[0_5px_14px_rgba(15,23,42,0.12)]"
                                    : "border-transparent text-gray-600 hover:border-white/70 hover:bg-white/55 hover:text-gray-900"
                            }`
                        }
                    >
                        Women
                    </NavLink>

                </div>


                {/* Account + Cart */}

                <div className="flex items-center gap-2 sm:gap-4">

                    {user ? (

                        <>
                        <Link
                                 to="/profile"
                                 className="hidden rounded-full px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-white/60 hover:text-gray-900 md:block"
                                >
                         Hi, {user.name}
                        </Link>
                        <Link
                            to="/orders"
                           className="hidden rounded-full px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-white/60 hover:text-gray-900 md:block"
                        >
                           My Orders
                        </Link>

                            <button
                                onClick={handleLogout}
                                className="rounded-full px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-white/60 hover:text-gray-900"
                            >
                                Logout
                            </button>
                        </>

                    ) : (

                        <>
                            <Link
                                to="/login"
                                className="rounded-full px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-white/60 hover:text-gray-900"
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                className="rounded-full px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-white/60 hover:text-gray-900"
                            >
                                Register
                            </Link>
                        </>

                    )}


                    {/* Cart */}

                    <Link
                        to="/cart"
                        className="group relative flex items-center gap-2 rounded-full border border-white/60 bg-white/45 px-3 py-2 shadow-[0_5px_16px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/75 hover:shadow-[0_8px_20px_rgba(15,23,42,0.14)]"
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

                            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-gray-900 px-1 text-xs font-semibold text-white shadow-sm">
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