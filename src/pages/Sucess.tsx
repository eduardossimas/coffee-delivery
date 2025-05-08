import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import Illustration from "../assets/illustration.svg";

export function Sucess() {

    const orderData = JSON.parse(localStorage.getItem("@coffee-delivery:checkout-1.0.0") || "{}");
    const { street, number, complement, neighborhood, city, state, paymentMethod } = orderData;

    function paymentMethodFix() {
        if (paymentMethod === "credit") {
            return "Cartão de Crédito";
        }
        if (paymentMethod === "debit") {
            return "Cartão de Débito";
        }
        if (paymentMethod === "money") {
            return "Dinheiro";
        }
        return "Método de pagamento não especificado";
    }

    return (
        <div className="py-10 px-4">
            <h2 className="font-title font-extrabold text-title-l text-yellow-dark text-center md:text-left">
                Uhu! Pedido confirmado
            </h2>
            <span className="font-text text-title-s text-base-subtitle block text-center md:text-left">
                Agora é só aguardar que logo o café chegará até você
            </span>

            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 mt-10">
                <div className="p-6 sm:p-8 md:p-10 border rounded-tr-3xl rounded-bl-3xl flex flex-col gap-6 w-full lg:w-1/2">

                    <div className="flex gap-3 items-center">
                        <div className="bg-purple rounded-full p-2">
                            <MapPin size={16} weight="fill" className="text-white" />
                        </div>
                        <span className="text-base-text text-sm sm:text-base font-text">
                            Entrega em <strong>{street}, {number}{complement ? `, ${complement}` : ""}</strong><br />
                            {neighborhood} - {city}, {state}
                        </span>
                    </div>

                    <div className="flex gap-3 items-center">
                        <div className="bg-yellow rounded-full p-2">
                            <Timer size={16} weight="fill" className="text-white" />
                        </div>
                        <span className="text-base-text text-sm sm:text-base font-text">
                            Previsão de entrega<br />
                            <strong>20 min - 30 min</strong>
                        </span>
                    </div>

                    <div className="flex gap-3 items-center">
                        <div className="bg-yellow-dark rounded-full p-2">
                            <CurrencyDollar size={16} className="text-white" />
                        </div>
                        <span className="text-base-text text-sm sm:text-base font-text">
                            Pagamento na entrega<br />
                            <strong>{paymentMethodFix()}</strong>
                        </span>
                    </div>
                </div>

                <img className="w-full max-w-[400px] mx-auto" src={Illustration} alt="Ilustração de entrega" />
            </div>
        </div>
    );
}
