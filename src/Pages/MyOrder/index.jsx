import { Layout } from "../../Components/Layout";
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from "../../Components/OrderCard";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function MyOrder() {
    const context = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname
    //substring para obtener el index de la url 
    //last para obtener el ultimo index y el mas 1 para que no cuente la / 
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    //si el index es igual a last entonces el index sera igual a la longitud de la orden -1
    if (index === 'last') index = context.order?.length - 1


    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-6'>
                <Link to='/my-orders' className='absolute left-0'>
                    <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
                </Link>
                <h1>My Order</h1>
            </div>
            <div className='flex flex-col w-80'>
                {
                    context.order?.[index]?.products.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                        />
                    ))
                }
            </div>
        </Layout>
    )
}

export { MyOrder };