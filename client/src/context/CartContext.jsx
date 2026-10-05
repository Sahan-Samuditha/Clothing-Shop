import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

    // Load cart from localStorage when the app starts
    const [cartItems, setCartItems] = useState(() => {

        const savedCart = localStorage.getItem("cartItems");

        return savedCart
            ? JSON.parse(savedCart)
            : [];

    });


    // Save cart whenever cartItems changes
    useEffect(() => {

        localStorage.setItem(
            "cartItems",
            JSON.stringify(cartItems)
        );

    }, [cartItems]);


    const addToCart = (product) => {

        setCartItems((currentItems) => {

            const existingItem = currentItems.find(
                (item) =>
                    item._id === product._id &&
                    item.selectedSize === product.selectedSize &&
                    item.selectedColor === product.selectedColor
            );


            if (existingItem) {

                return currentItems.map((item) =>
                    item._id === product._id &&
                    item.selectedSize === product.selectedSize &&
                    item.selectedColor === product.selectedColor
                        ? {
                              ...item,
                              quantity:
                                  item.quantity +
                                  (product.quantity || 1),
                          }
                        : item
                );

            }


            return [
                ...currentItems,

                {
                    ...product,

                    cartItemId:
                        `${product._id}-${product.selectedSize}-${product.selectedColor}`,

                    quantity: product.quantity || 1,
                },
            ];

        });

    };


    const removeFromCart = (cartItemId) => {

        setCartItems((currentItems) =>
            currentItems.filter(
                (item) => item.cartItemId !== cartItemId
            )
        );

    };


    const increaseQuantity = (cartItemId) => {

        setCartItems((currentItems) =>
            currentItems.map((item) =>
                item.cartItemId === cartItemId
                    ? {
                          ...item,
                          quantity: item.quantity + 1,
                      }
                    : item
            )
        );

    };


    const decreaseQuantity = (cartItemId) => {

        setCartItems((currentItems) =>
            currentItems
                .map((item) =>
                    item.cartItemId === cartItemId
                        ? {
                              ...item,
                              quantity: item.quantity - 1,
                          }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );

    };


    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );


    const totalPrice = cartItems.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );


    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity,
                totalItems,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );

}


export function useCart() {

    return useContext(CartContext);

}