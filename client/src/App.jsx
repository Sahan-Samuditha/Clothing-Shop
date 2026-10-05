import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

import Navbar from "./components/Navbar";

import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

function App() {
    return (
        <AuthProvider>
            <CartProvider>
                <BrowserRouter>

                    <Navbar />

                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route path="/shop" element={<Shop />} />

                        <Route
                            path="/product/:id"
                            element={<ProductDetails />}
                        />

                        <Route
                            path="/cart"
                            element={<Cart />}
                        />

                        <Route
                            path="/register"
                            element={<Register />}
                        />

                        <Route
                            path="/login"
                            element={<Login />}
                        />
                        <Route
                            path="/profile"
                            element={<Profile />}
                        />
                    </Routes>

                </BrowserRouter>
            </CartProvider>
        </AuthProvider>
    );
}

export default App;