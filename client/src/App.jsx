import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Checkout from "./pages/Checkout";
import { useNavigate } from "react-router-dom";
import Orders from "./pages/Orders";

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
                            element={<Cart
                                
                                />}
                            
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
                            element={
                                    <ProtectedRoute>
                                        <Profile />
                                </ProtectedRoute>
                        }
                        />
                        <Route
                            path="/checkout"
                            element={
                                 <ProtectedRoute>
                                <Checkout />
                                </ProtectedRoute>
                        }
                        />
                        <Route
                            path="/orders"
                            element={
                                <ProtectedRoute>
                                    <Orders />
                                  </ProtectedRoute>
                                 }
                        />
                    </Routes>

                </BrowserRouter>
            </CartProvider>
        </AuthProvider>
    );
}

export default App;