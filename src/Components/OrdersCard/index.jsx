
const OrdersCard = props => {
    const { totalPrice, totalProducts } = props

    return (
        <div className="flex justify-between items-center border-black mt-3 mb-3  w-[400px] h-[100px] rounded-lg  shadow-xl ">
            <p className="text-center w-full">
                <span className="text-start font-light mx-4" >01/02/23</span>
                <span className="font-normal ">Cantidad productos :{totalProducts}</span>
                <span className="font-semibold mx-4">${totalPrice}</span>
            </p>
        </div>
    )
}

export {OrdersCard} 