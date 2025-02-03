import { useContext } from 'react'
import { XCircleIcon } from '@heroicons/react/outline';
import { ShoppingCartContext } from '../../Context'
import './styles.css'
import { useState } from 'react';
import { OrderCard } from '../OrderCard';

const CheckoutSideMenu = () => {
    // Context
    const context = useContext(ShoppingCartContext)
    console.log('context.cartProducts', context.cartProducts)

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
                        />
                    ))
                }
            </div>
        </aside>
    )

}

export { CheckoutSideMenu }