import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    //count of items in the cart
    const [count, setCount] = useState(0)

    // Product Detail · Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);


    // Checkout  · Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);


    // Product Detail · Show product
    const [productToShow, setProductToShow] = useState({})


    // ESTADO DE PRODUCTOS
    const [products, setProducts] = useState({})

    // Shopping Cart · Add products to cart
    const [cartProducts, setCartProducts] = useState([])


    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setIsProductDetailOpen,
            setProductToShow,
            products,
            setProducts,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            isCheckoutSideMenuOpen,
            setIsCheckoutSideMenuOpen,
            cartProducts,
            setCartProducts

        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}