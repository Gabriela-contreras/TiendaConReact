import { NavLink } from "react-router-dom";


function Navbar() {
    const activeStyle = "underline underline-offset-4";
    return (
        <nav className="flex justify-between items-center  mb-2 h-16 w-full px-4">
            <ul className='flex justify-between items-center space-x-4 ml-2 font-normal'>
                <li className="font-semibold text-lg">
                    <NavLink
                        to="/" >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/electronics"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/clothes"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/furnitures"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/others"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex justify-between items-center space-x-4 mr-2 font-normal'>
                <li className="text-black/60">
                    <NavLink>
                        gabriela@gmail.com
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/my-orders"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        MyOrders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/my-account"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        MyAccount
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/sign-in"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        SingIn
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/shop"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        🛒0
                    </NavLink>
                </li>

            </ul>

        </nav>
    )
}


export { Navbar };