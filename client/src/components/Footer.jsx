import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-black text-white">

            <div className="mx-auto max-w-7xl px-6 py-12">

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}

                    <div>

                        <h2 className="text-2xl font-bold tracking-wide">
                            STYLEHUB
                        </h2>

                        <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
                            Discover modern fashion and everyday styles
                            designed to make you look and feel your best.
                        </p>

                        <div className="mt-6 flex gap-4">

                            <a
                                href="#"
                                className="hover:text-gray-400"
                            >
                                Facebook
                            </a>

                            <a
                                href="#"
                                className="hover:text-gray-400"
                            >
                                Instagram
                            </a>

                            <a
                                href="#"
                                className="hover:text-gray-400"
                            >
                                TikTok
                            </a>

                        </div>

                    </div>


                    {/* Shop */}

                    <div>

                        <h3 className="text-lg font-semibold">
                            Shop
                        </h3>

                        <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">

                            <Link
                                to="/shop"
                                className="hover:text-white"
                            >
                                All Products
                            </Link>

                            <Link
                                to="/shop?category=Men"
                                className="hover:text-white"
                            >
                                Men
                            </Link>

                            <Link
                                to="/shop?category=Women"
                                className="hover:text-white"
                            >
                                Women
                            </Link>

                            <Link
                                to="/shop?category=Unisex"
                                className="hover:text-white"
                            >
                                Unisex
                            </Link>

                        </div>

                    </div>


                    {/* Customer Service */}

                    <div>

                        <h3 className="text-lg font-semibold">
                            Customer Service
                        </h3>

                        <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">

                            <Link
                                to="/orders"
                                className="hover:text-white"
                            >
                                My Orders
                            </Link>

                            <Link
                                to="/cart"
                                className="hover:text-white"
                            >
                                Shopping Cart
                            </Link>

                            <Link
                                to="/profile"
                                className="hover:text-white"
                            >
                                My Account
                            </Link>

                            <a
                                href="#"
                                className="hover:text-white"
                            >
                                Contact Us
                            </a>

                        </div>

                    </div>


                    {/* Contact */}

                    <div>

                        <h3 className="text-lg font-semibold">
                            Contact Us
                        </h3>

                        <div className="mt-4 space-y-3 text-sm text-gray-400">

                            <p>
                                📍 Colombo, Sri Lanka
                            </p>

                            <p>
                                📞 +94 71 234 5678
                            </p>

                            <p>
                                ✉️ support@stylehub.com
                            </p>

                        </div>

                    </div>

                </div>


                {/* Bottom */}

                <div className="mt-12 border-t border-gray-800 pt-6">

                    <div className="flex flex-col justify-between gap-4 text-sm text-gray-500 md:flex-row">

                        <p>
                            © {new Date().getFullYear()} STYLEHUB.
                            All rights reserved.
                        </p>

                        <div className="flex gap-6">

                            <a
                                href="#"
                                className="hover:text-white"
                            >
                                Privacy Policy
                            </a>

                            <a
                                href="#"
                                className="hover:text-white"
                            >
                                Terms & Conditions
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;