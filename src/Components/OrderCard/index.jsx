import { XCircleIcon } from '@heroicons/react/outline';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

const OrderCard = props => {
    const { title, imageUrl, price, id, handleDelete } = props

    let renderXMarkIcon
    if (handleDelete) {
        renderXMarkIcon = <XCircleIcon onClick={() => handleDelete(id)} className='h-6 w-6 text-black cursor-pointer'></XCircleIcon>
    }



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
                {renderXMarkIcon}
            </div>
        </div>
    )
}

export { OrderCard }