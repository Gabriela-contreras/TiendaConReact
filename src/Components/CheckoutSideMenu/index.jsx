import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { XCircleIcon } from '@heroicons/react/outline';
import { ShoppingCartContext } from '../../Context'
import './styles.css'
import { OrderCard } from '../OrderCard';
import { totalPrice } from '../../util'

const CheckoutSideMenu = () => {
    // Context
    const context = useContext(ShoppingCartContext)
    // console.log('context.cartProducts', context.cartProducts)


    //funcion  para obtener la fecha actual
    function obtenerFechaActual() {
        const fechaActual = new Date();

        const dia = String(fechaActual.getDate()).padStart(2, '0'); // Día con 2 dígitos
        const mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Mes con 2 dígitos
        const año = fechaActual.getFullYear(); // Año completo

        return `${dia}/${mes}/${año}`;
    }

    //funcion para obtener el total de la compra
    const handleCheckout = () => {
        const orderToAdd = {
            date: obtenerFechaActual(),
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setCount(0)
        context.closeCheckoutSideMenu()
    }

    


    return (
        <aside
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white overflow-auto`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XCircleIcon
                        className='h-6 w-6 text-black cursor-pointer'
                        onClick={() => context.closeCheckoutSideMenu()}></XCircleIcon>
                </div>
            </div>
            <div className='px-6'>
                {
                    context.cartProducts.map(product => (
                        <OrderCard
                            key={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            id={product.id}
                        />
                    ))
                }
            </div>

            <div className='mx-2'>
                <p className='text-center text-lg font-medium p-6 border-t border-b border-black'>
                    <span>Total:</span>
                    <span>$ {totalPrice(context.cartProducts)}</span>

                </p>
                <Link to='/my-orders/last'>
                    <button className='bg-black py-3 text-white w-full rounded-lg' onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    )

}

export { CheckoutSideMenu }