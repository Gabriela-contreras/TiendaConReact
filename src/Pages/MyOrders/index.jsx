import { Layout } from "../../Components/Layout";
import { useContext } from 'react'
import { ShoppingCartContext } from "../../Context";

function MyOrders() {
    // Context
    const context = useContext(ShoppingCartContext)
    return (
        <Layout>
            <h1 className="text-bold font-sans">My Orders</h1>
        </Layout>
    )
}

export { MyOrders };