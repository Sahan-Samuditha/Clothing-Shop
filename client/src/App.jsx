import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
             <Navbar />

                <Routes>

                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/shop"
                        element={<Shop />}
                    />

                    <Route
                        path="/product/:id"
                        element={<ProductDetails />}
                    />

                    <Route
                        path="/cart"
                        element={<Cart />}
                    />

                </Routes>

            </BrowserRouter>
        </CartProvider>
    );
}

export default App;