import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import {ChevronRightIcon } from "@heroicons/react/outline";


const OrderCard = props => {
    const { title, imageUrl, price, id, handleDelete } = props

    // let renderXMarkIcon
    // if (deleteProduct) {
    //     renderXMarkIcon = <ChevronRightIcon onClick={() => deleteProduct(id)} className='h-6 w-6 text-black cursor-pointer'></ChevronRightIcon>
    // }
    



    //useContext
    const context = useContext(ShoppingCartContext)


    // Delete product de la carta
    const deleteProduct = (id) => {
        const CardProducts = context.cartProducts.filter(product => product.id !== id)
        context.setCartProducts(CardProducts)
        context.setCount(context.count - 1)


    }

    return (
        <div className="flex justify-between items-center mb-3">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
                </figure>
                <p className='text-sm font-light line-clamp-1'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{price}</p>
                {/* {renderXMarkIcon} */}
                <ChevronRightIcon onClick={() => deleteProduct(id)} className='h-6 w-6 text-black cursor-pointer'></ChevronRightIcon>
            </div>
        </div>
    )
}

export { OrderCard }