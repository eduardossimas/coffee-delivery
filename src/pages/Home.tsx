import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import coffee from '../assets/Imagem.svg';
import { CoffeeCard } from '../components/CoffeeCard';

export function Home() {
    return (
        <div className="mt-10">
            <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-18 items-center">

                <div className='flex-1 flex flex-col gap-4 text-center lg:text-left'>
                    <h1 className='font-title text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight text-base-title'>
                        Encontre o café perfeito <br className='hidden lg:block' />
                        para qualquer hora do dia
                    </h1>
                    <p className='font-text text-base sm:text-lg text-base-subtitle leading-6'>
                        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora!
                    </p>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 font-light text-base tracking-wide mt-6'>
                        <div className='flex items-center gap-3'>
                            <div className='bg-yellow-dark rounded-full p-2'>
                                <ShoppingCart size={16} weight="fill" className="text-white" />
                            </div>
                            <span>Compra simples e segura</span>
                        </div>

                        <div className='flex items-center gap-3'>
                            <div className='bg-base-text rounded-full p-2'>
                                <Package size={16} weight="fill" className="text-white" />
                            </div>
                            <span>Embalagem mantém o café intacto</span>
                        </div>

                        <div className='flex items-center gap-3'>
                            <div className='bg-yellow rounded-full p-2'>
                                <Timer size={16} weight="fill" className="text-white" />
                            </div>
                            <span>Entrega rápida e rastreada</span>
                        </div>

                        <div className='flex items-center gap-3'>
                            <div className='bg-purple rounded-full p-2'>
                                <Coffee size={16} weight="fill" className="text-white" />
                            </div>
                            <span>O café chega fresquinho até você</span>
                        </div>
                    </div>
                </div>

                <div className="">
                    <img
                        src={coffee}
                        alt="Coffee delivery"
                        className="w-full max-w-lg object-contain"
                    />
                </div>
            </div>
            <div className='w-full px-4 py-10'>
                <h2 className='font-title text-title-l font-bold leading-tight text-base-title mt-20 mb-10'>
                    Nossos cafés
                </h2>

                <div className='grid gap-10 justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    <CoffeeCard
                        name="Expresso Tradicional"
                        description="O tradicional café feito com água quente e grãos moídos"
                        tags={['Tradicional']}
                        price={9.90}
                        imageUrl="/assets/Type=Expresso.svg"
                    />
                    <CoffeeCard
                        name="Expresso Americano"
                        description="Expresso diluído, menos intenso que o tradicional"
                        tags={['Tradicional']}
                        price={9.90}
                        imageUrl="/assets/Type=Americano.svg"
                    />
                    <CoffeeCard
                        name="Expresso Cremoso"
                        description="Café expresso tradicional com espuma cremosa"
                        tags={['Tradicional']}
                        price={9.90}
                        imageUrl="/assets/Type=Expresso Cremoso.svg"
                    />
                    <CoffeeCard
                        name="Expresso Gelado"
                        description="Bebida preparada com café expresso e cubos de gelo"
                        tags={['Tradicional', 'Gelado']}
                        price={9.90}
                        imageUrl="/assets/Type=Café Gelado.svg"
                    />
                    <CoffeeCard
                        name="Café com Leite"
                        description="Meio a meio de expresso tradicional com leite vaporizado"
                        tags={['Tradicional', 'Com Leite']}
                        price={9.90}
                        imageUrl="/assets/Type=Café com Leite.svg"
                    />
                    <CoffeeCard
                        name="Latte"
                        description="Uma dose de café expresso com o dobro de leite e espuma cremosa"
                        tags={['Tradicional', 'Com Leite']}
                        price={9.90}
                        imageUrl="/assets/Type=Latte.svg"
                    />
                    <CoffeeCard
                        name="Capuccino"
                        description="Bebida com canela feita de doses iguais de café, leite e espuma"
                        tags={['Tradicional', 'Com Leite']}
                        price={9.90}
                        imageUrl="/assets/Type=Capuccino.svg"
                    />
                    <CoffeeCard
                        name="Macchiato"
                        description="Café expresso misturado com um pouco de leite quente e espuma"
                        tags={['Tradicional', 'Com Leite']}
                        price={9.90}
                        imageUrl="/assets/Type=Macchiato.svg"
                    />
                    <CoffeeCard
                        name="Mocaccino"
                        description="Café expresso com calda de chocolate, pouco leite e espuma"
                        tags={['Tradicional', 'Com Leite']}
                        price={9.90}
                        imageUrl="/assets/Type=Mochaccino.svg"
                    />
                    <CoffeeCard
                        name="Chocolate Quente"
                        description="Bebida feita com chocolate dissolvido no leite quente e café"
                        tags={['Especial', 'Com Leite']}
                        price={9.90}
                        imageUrl="/assets/Type=Chocolate Quente.svg"
                    />
                    <CoffeeCard
                        name="Cubano"
                        description="Drink gelado de café expresso com rum, creme de leite e hortelã"
                        tags={['Especial', 'Alcoólico', 'Gelado']}
                        price={9.90}
                        imageUrl="/assets/Type=Cubano.svg"
                    />
                    <CoffeeCard
                        name="Havaiano"
                        description="Bebida adocicada preparada com café e leite de coco"
                        tags={['Especial']}
                        price={9.90}
                        imageUrl="/assets/Type=Havaiano.svg"
                    />
                    <CoffeeCard
                        name="Árabe"
                        description="Bebida preparada com grãos de café árabe e especiarias"
                        tags={['Especial']}
                        price={9.90}
                        imageUrl="/assets/Type=Árabe.svg"
                    />
                    <CoffeeCard
                        name="Irlandês"
                        description="Bebida a base de café, uísque irlandês, açúcar e chantilly"
                        tags={['Especial', 'Alcoólico']}
                        price={9.90}
                        imageUrl="/assets/Type=Irlandês.svg"
                    />
                </div>
            </div>
        </div>
    );
}
