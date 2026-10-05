import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
    const { totalItems } = useCart();

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


                {/* Navigation */}

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
                        to="/shop"
                        className="hover:text-gray-500"
                    >
                        Men
                    </Link>

                    <Link
                        to="/shop"
                        className="hover:text-gray-500"
                    >
                        Women
                    </Link>

                </div>


                {/* Cart */}

                <Link
                    to="/cart"
                    className="relative flex items-center gap-2"
                >
                    <span className="text-xl">
                        🛒
                    </span>

                    <span>
                        Cart
                    </span>

                    {totalItems > 0 && (
                        <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-black px-1 text-xs text-white">
                            {totalItems}
                        </span>
                    )}

                </Link>

            </div>

        </nav>
    );
}

export default Navbar;