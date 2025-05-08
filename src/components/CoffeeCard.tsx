import { useContext, useState } from "react";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { CartContext } from "../context/CartContext";

interface CoffeeCardProps {
    name: string;
    description: string;
    tags: string[];
    price: number;
    imageUrl: string;
}

export function CoffeeCard(
    { name, description, tags, price, imageUrl }: CoffeeCardProps
) {
    const [quantity, setQuantity] = useState(1);

    function handleIncrease() {
        setQuantity((prev) => prev + 1);
    }

    function handleDecrease() {
        setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
    }

    const { addCoffeeToCart } = useContext(CartContext);

    function handleAddToCart() {
        const coffee = {
            id: name,
            name,
            imageUrl,
            price,
            quantity 
        }

        addCoffeeToCart({ ...coffee, quantity });
    }
    
    return (
        <div className="bg-base-card w-64 rounded-tl-md rounded-tr-4xl rounded-bl-4xl rounded-br-md p-5">
            <img src={imageUrl} alt="" className="-mt-10 mx-auto" />
            <div className="flex gap-2 mb-4 mt-3 items-center justify-center">
                {tags.map((tag) => (
                    <span key={tag} className="bg-yellow-light text-yellow-dark text-tag font-bold uppercase rounded-full px-2 py-1">
                        {tag}
                    </span>
                ))}
            </div>
            <h2 className="text-base-subtitle text-title-s font-bold font-title text-center">{name}</h2>
            <p className="text-base-label text-s text-center mx-auto">{description}</p>
            <div className="flex justify-between items-center mt-5">
                <div className="flex items-center gap-1">
                    <span className="text-base-text font-text text-s">R$</span>
                    <strong className="text-base-text font-title text-title-m">{price.toFixed(2).replace(".", ",")}</strong>
                </div>
                <div className="flex gap-2">
                    <div className="flex items-center gap-2 p-2 bg-base-button rounded-md text-purple">
                        <button onClick={handleDecrease} className="cursor-pointer">
                            <Minus size={14} weight="bold" className="text-purple" />
                        </button>
                        <span className="text-base-title">
                            {quantity}
                        </span>
                        <button onClick={handleIncrease} className="cursor-pointer">
                            <Plus size={14} weight="bold" className="text-purple" />
                        </button>
                    </div>
                    <button 
                        className="bg-purple-dark rounded-md p-2 cursor-pointer"
                        onClick={handleAddToCart}
                    >
                        <ShoppingCart size={22} weight="fill" className="text-white" />
                    </button>
                </div>
            </div>
        </div>
    )
}