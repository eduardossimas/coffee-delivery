import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import logo from '../assets/Logo.svg';

import { CartContext } from '../context/CartContext';

export function Header() {
    const { totalItems } = useContext(CartContext);

    return (
        <header className="sticky top-0 z-50 py-8 flex justify-between items-center bg-background">
            <NavLink to="/">
                <img src={logo} alt="Logo" className="h-10" />
            </NavLink>
            <div className='flex items-center gap-3'>
                <button className='flex items-center gap-2 bg-purple-light rounded-md p-2'>
                    <MapPin size={22} weight="fill" className="text-purple" />
                    <span className="text-base text-purple-dark">São Paulo, SP</span>
                </button>
                <NavLink to="/checkout">
                    <button className="bg-yellow-light rounded-md p-2 relative cursor-pointer">
                        <ShoppingCart size={22} weight="fill" className="text-yellow-dark" />

                        <span className="absolute -top-2 -right-2 bg-yellow-dark text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            {totalItems}
                        </span>
                    </button>
                </NavLink>
            </div>
        </header>
    )
}