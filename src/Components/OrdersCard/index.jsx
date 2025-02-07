import { CalendarIcon, ChevronRightIcon } from "@heroicons/react/outline";


const OrdersCard = props => {
    const { totalPrice, totalProducts } = props
    //funcion  para obtener la fecha actual
    function obtenerFechaActual() {
        const fechaActual = new Date();

        const dia = String(fechaActual.getDate()).padStart(2, '0'); // Día con 2 dígitos
        const mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Mes con 2 dígitos
        const año = fechaActual.getFullYear(); // Año completo

        return `${dia}/${mes}/${año}`;
    }


    return (
        <div className="flex justify-between items-center border-black mt-3 mb-3  w-[400px] h-[100px] rounded-lg  shadow-xl ">
            <p className="flex flex-col w-full ">

                <div className='flex items-center justify-start top-0 left-0 w-[200px] ml-3'>
                    <CalendarIcon className='h-4 w-4 text-black cursor-pointer ' />
                    <span className="text-start font-light mx-4" >{obtenerFechaActual()}</span>
                </div>

                <div className="flex items-center justify-center w-[200px]">
                    <span className="font-normal ">Cantidad productos :{totalProducts}</span>
                </div>
            </p>
            <div className="flex items-center justify-center w-[200px]">
                <span className="font-semibold text-xl mx-4 ">${totalPrice}</span>
                <ChevronRightIcon className='h-8 w-8 text-black cursor-pointer mr-3' />
            </div>
        </div>
    )
}

export { OrdersCard } 