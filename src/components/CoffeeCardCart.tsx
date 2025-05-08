import { useContext } from "react";
import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { CartContext } from "../context/CartContext";

interface CoffeeCardCartProps {
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
}

export function CoffeeCardCart(
    { name, price, imageUrl, quantity }: CoffeeCardCartProps
) {
    const { addCoffeeToCart, removeCoffeeFromCart, removeOneCoffeeFromCart } = useContext(CartContext);

    function handleRemoveOneCoffeeFromCart() {
        removeOneCoffeeFromCart(name);
    }


    function handleAddToCart() {
        const id = name;
        addCoffeeToCart({ id, name, price, imageUrl, quantity: 1 });
    }

    function handleRemoveFromCart() {
        removeCoffeeFromCart(name);
    }

    return (
        <div>
            <div className="flex justify-between items-start mb-8 border-b border-base-button pb-8">
                <div className="flex gap-4">
                    <img className="w-16 h-16" src={imageUrl} alt="" />
                    <div className="flex flex-col gap-2">
                        <h3 className="text-base-subtitle text-m font-text">{name}</h3>
                        <div className="flex gap-2 items-center">
                            <div className="flex items-center gap-2 p-2 bg-base-button rounded-md text-purple h-8">
                                {
                                    quantity > 1 ? (
                                        <button type="button" onClick={handleRemoveOneCoffeeFromCart} className="cursor-pointer">
                                            <Minus size={14} weight="bold" className="text-purple font-bold" />
                                        </button>
                                    ) : (
                                        <button type="button" onClick={handleRemoveOneCoffeeFromCart} disabled className="cursor-pointer">
                                            <Minus size={14} weight="bold" className="text-purple font-bold" />
                                        </button>
                                    )
                                }
                                <span className="text-base-title">
                                    {quantity}
                                </span>
                                <button type="button" onClick={handleAddToCart} className="cursor-pointer">
                                    <Plus size={14} weight="bold" className="text-purple font-bold" />
                                </button>
                            </div>
                            <button
                                type="button"
                                className="bg-base-button rounded-md p-2 cursor-pointer flex gap-1 h-8 hover:bg-base-hover"
                                onClick={handleRemoveFromCart}
                            >
                                <Trash size={16} weight="regular" className="text-purple" />
                                <span className="text-base-text text-xs font-text uppercase">Remover</span>
                            </button>
                        </div>
                    </div>
                </div>
                <span className="text-base-text text-m font-text font-bold">R$ {(quantity * price).toFixed(2).replace(".", ",")}</span>
            </div>
        </div>
    )
}