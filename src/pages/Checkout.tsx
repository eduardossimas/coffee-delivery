import { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import { CoffeeCardCart } from "../components/CoffeeCardCart";
import { CartContext } from "../context/CartContext";
import { checkoutSchema, type CheckoutFormData } from "../schemas/checkoutSchema";
import { useNavigate } from "react-router-dom";

export function Checkout() {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<CheckoutFormData>({
        resolver: zodResolver(checkoutSchema),
    });

    const { totalPrice, cartItems, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    function onSubmit(data: CheckoutFormData) {
        localStorage.setItem("@coffee-delivery:checkout-1.0.0", JSON.stringify(data));
        clearCart();
        navigate("/sucess");
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:flex-row py-10 gap-8 px-4">

            <div className="flex flex-col gap-6 w-full lg:w-3/5">
                <h2 className="font-title text-title-xs text-base-subtitle font-bold">
                    Complete seu pedido
                </h2>

                <div className="bg-base-card p-6 sm:p-8 lg:p-10 rounded-md">
                    <div className="flex gap-2 items-start mb-6">
                        <MapPinLine size={22} className="text-yellow-dark" />
                        <div className="flex flex-col">
                            <h3 className="text-base-subtitle text-m font-text">Endereço de Entrega</h3>
                            <span className="text-base-text text-s font-text">Informe o endereço onde deseja receber seu pedido</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <Controller
                            name="cep"
                            control={control}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    placeholder="CEP"
                                    maxLength={8}
                                    className="p-3 bg-base-input border border-base-button text-base-label w-full sm:w-1/2"
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, ""); 
                                        field.onChange(value.replace(/(\d{5})(\d{3})/, "$1-$2"));
                                    }}
                                />
                            )}
                        />
                        {errors.cep && <span className="text-red-500 text-xs">{errors.cep.message}</span>}


                        <input {...register("street")} className="p-3 bg-base-input border border-base-button text-base-label w-full" placeholder="Rua" />
                        {errors.street && <span className="text-red-500 text-xs">{errors.street.message}</span>}

                        <div className="flex flex-col sm:flex-row gap-3">
                            <input {...register("number")} className="p-3 bg-base-input border border-base-button text-base-label w-full sm:w-1/3" placeholder="Número" />
                            {errors.number && <span className="text-red-500 text-xs">{errors.number.message}</span>}

                            <input {...register("complement")} className="p-3 bg-base-input border border-base-button text-base-label w-full sm:w-2/3" placeholder="Complemento" />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <input {...register("neighborhood")} className="p-3 bg-base-input border border-base-button text-base-label w-full sm:w-2/6" placeholder="Bairro" />
                            {errors.neighborhood && <span className="text-red-500 text-xs">{errors.neighborhood.message}</span>}

                            <input {...register("city")} className="p-3 bg-base-input border border-base-button text-base-label w-full sm:w-3/6" placeholder="Cidade" />
                            {errors.city && <span className="text-red-500 text-xs">{errors.city.message}</span>}

                            <input {...register("state")} className="p-3 bg-base-input border border-base-button text-base-label w-full sm:w-1/6" placeholder="UF" />
                            {errors.state && <span className="text-red-500 text-xs">{errors.state.message}</span>}
                        </div>
                    </div>
                </div>

                <div className="bg-base-card p-6 sm:p-8 lg:p-10 flex flex-col gap-6 rounded-md">
                    <div className="flex gap-2 items-start">
                        <CurrencyDollar size={22} className="text-purple" />
                        <div className="flex flex-col">
                            <h3 className="text-base-subtitle text-m font-text">Pagamento</h3>
                            <span className="text-base-text text-s font-text">
                                O pagamento é feito na entrega. Escolha a forma que deseja pagar
                            </span>
                        </div>
                    </div>

                    <Controller
                        name="paymentMethod"
                        control={control}
                        render={({ field }) => (
                            <div className="flex flex-col sm:flex-row gap-3">
                                {[
                                    { method: "credit", label: "Cartão de Crédito", icon: <CreditCard size={16} className="text-purple" /> },
                                    { method: "debit", label: "Cartão de Débito", icon: <Bank size={16} className="text-purple" /> },
                                    { method: "money", label: "Dinheiro", icon: <Money size={16} className="text-purple" /> }
                                ].map(({ method, label, icon }) => (
                                    <button
                                        key={method}
                                        type="button"
                                        onClick={() => field.onChange(method)}
                                        className={`flex-1 flex items-center justify-center gap-2 p-3 text-xs uppercase font-text border rounded-md 
                      bg-base-button text-base-text hover:bg-base-hover transition-colors
                      ${field.value === method ? "bg-purple-light border-purple border-2" : "border-base-button"}`}
                                    >
                                        {icon}
                                        <span>{label}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    />
                    {errors.paymentMethod && <span className="text-red-500 text-xs">{errors.paymentMethod.message}</span>}
                </div>
            </div>

            <div className="flex flex-col gap-6 w-full lg:w-2/5">
                <h2 className="font-title text-title-xs text-base-subtitle font-bold">
                    Cafés selecionados
                </h2>

                <div className="bg-base-card p-6 sm:p-8 lg:p-10 rounded-tr-3xl rounded-bl-3xl">
                    {cartItems.length !== 0 ? (
                        cartItems.map((coffee) => (
                            <CoffeeCardCart
                                key={coffee.id}
                                name={coffee.name}
                                price={coffee.price}
                                imageUrl={coffee.imageUrl}
                                quantity={coffee.quantity}
                            />
                        ))
                    ) : (
                        <p className="text-center text-base-text font-text text-m">
                            Seu carrinho está vazio. Adicione itens para continuar.
                        </p>
                    )}

                    {cartItems.length !== 0 && (
                        <>
                            <div className="flex flex-col gap-3 mt-6">
                                <div className="flex justify-between items-center">
                                    <span className="font-text text-s text-base-text">Total de itens</span>
                                    <span className="font-text text-m text-base-text">R$ {totalPrice.toFixed(2).replace(".", ",")}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-text text-s text-base-text">Entrega</span>
                                    <span className="font-text text-m text-base-text">R$ 3,50</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-text font-bold text-title-s text-base-subtitle">Total</span>
                                    <span className="font-text font-bold text-title-s text-base-subtitle">
                                        R$ {(totalPrice + 3.5).toFixed(2).replace(".", ",")}
                                    </span>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="uppercase bg-yellow text-white font-bold font-text text-s w-full py-3 px-2 rounded-md mt-6 hover:bg-yellow-dark/80 transition-colors"
                            >
                                Confirmar pedido
                            </button>
                        </>
                    )}
                </div>
            </div>
        </form>
    );
}
