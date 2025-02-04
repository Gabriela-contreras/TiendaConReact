import { useContext } from 'react'
import { PlusIcon, CheckIcon } from '@heroicons/react/outline'
import { ShoppingCartContext } from '../../Context'
import { useEffect , useState} from 'react'

const Card = (data) => {
    // Context
    const context = useContext(ShoppingCartContext)

    // Show product detail actualiza el estado de isProductDetailOpen 
    // a true y setea el producto a mostrar
    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
        context.closeCheckoutSideMenu()

    }
    //|Agrega el producto al carrito
    const addProductCard = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1);
        context.setProducts(productData);
        context.setCartProducts([...context.cartProducts, productData]);
        context.openCheckoutSideMenu();
        context.closeProductDetail()
    }
    const renderIcon = (id) => {

        //usando useEffect
        //estados del producto
        const [isInCard, setIsInCard] = useState(false)
        //verifica si el producto esta en el carrito
        useEffect(() => {
            const foundCard = context.cartProducts.find(product => product.id === id)
            setIsInCard(foundCard)
        }, [context.cartProducts])



        if (isInCard ) {
            return (
                <div
                    className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1'
                    onClick={() => addProductCard(data.data)}>
                    <CheckIcon
                        className='h-6 w-6 text-white'
                    />
                </div>
            )
        } else {
            return (
                <div
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                    onClick={() => addProductCard(data.data)}>
                    <PlusIcon
                        onClick={(event) => addProductCard(event, data.data)}
                        className='h-6 w-6 text-black'
                    />
                </div>
            )
        }

    }

    return (
        <div
            className='bg-white cursor-pointer w-56 h-60 rounded-lg mb-4'
            onClick={() => showProduct(data.data)}>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category.name}</span>
                <img className='w-full h-full object-cover rounded-lg ' src={data.data.images[0]} alt={data.data.title} />
                {renderIcon(data.data.id)}
            </figure>
            <p className='flex space-x-2 '>
                <span className='text-sm font-light line-clamp-1'>{data.data.title}</span>
                <span className='text-lg font-medium w-[100px]'>${data.data.price}</span>
            </p>
        </div>
    )
}

export { Card }