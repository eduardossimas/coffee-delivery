import { createContext, useEffect, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

export interface Coffee {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    quantity: number;
}

export interface CartContextType {
    addCoffeeToCart: (coffee: Coffee) => void;
    removeOneCoffeeFromCart: (coffeeId: string) => void;
    removeCoffeeFromCart: (coffeeId: string) => void;
    updateCoffeeQuantity: (coffeeId: string, quantity: number) => void;
    clearCart: () => void;
    cartItems: Coffee[];
    totalItems: number;
    totalPrice: number;
}

interface CartContextProviderProps {
    children: React.ReactNode;
}

const CartContext = createContext({} as CartContextType);
CartContext.displayName = "CartContext"; // So para parar de dar erro no console do React

function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartItems, dispatch] = useReducer(cartReducer, [], () => {
        const storedCart = localStorage.getItem("@coffee-delivery:cart-1.0.0");
        if (storedCart) {
            return JSON.parse(storedCart);
        }
        return [];
    });

    useEffect(
        () => {
            localStorage.setItem("@coffee-delivery:cart-1.0.0", JSON.stringify(cartItems));
        },
        [cartItems]
    );

    function addCoffeeToCart(coffee: Coffee) {
        dispatch({ type: "ADD_ITEM", payload: coffee });
    }

    function removeOneCoffeeFromCart(coffeeId: string) {
        dispatch({ type: "REMOVE_ONE_ITEM", payload: { id: coffeeId } });
    }

    function removeCoffeeFromCart(coffeeId: string) {
        dispatch({ type: "REMOVE_ITEM", payload: { id: coffeeId } });
    }

    function updateCoffeeQuantity(coffeeId: string, quantity: number) {
        dispatch({ type: "UPDATE_QUANTITY", payload: { id: coffeeId, quantity } });
    }

    function clearCart() {
        dispatch({ type: "CLEAR_CART" });
    }

    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

    return (
        <CartContext.Provider
            value={{
                addCoffeeToCart,
                removeOneCoffeeFromCart,
                removeCoffeeFromCart,
                updateCoffeeQuantity,
                clearCart,
                cartItems,
                totalItems,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export { CartContext, CartContextProvider };
