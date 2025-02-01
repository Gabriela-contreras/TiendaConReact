import { useContext } from 'react'
import { XCircleIcon } from '@heroicons/react/outline';
import { ShoppingCartContext } from '../../Context'
import './styles.css'

const CheckoutSideMenu = () => {
    // Context
    const context = useContext(ShoppingCartContext)

    return (
        <aside
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Check out </h2>
                <div>
                    <XCircleIcon
                        className='h-6 w-6 text-black cursor-pointer'
                        //cierra el detalle del producto
                        onClick={() => context.closeCheckoutSideMenu() 
                        } />
                </div>
            </div>

        
        </aside>
    )
}

export { CheckoutSideMenu }