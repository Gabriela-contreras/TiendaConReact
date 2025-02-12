import React from 'react'

const LogIn = () => {
    return (
        <div className='flex justify-center items-center h-screen'>

            <form action="" className='flex flex-col gap-4 p-4 border border-black rounded-lg'>
                <label htmlFor="text">Usuario</label>
                <input type="text" name="usuario" id="usuario" placeholder='Usuario' className='p-2 border border-black rounded-lg' />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder='Password' className='p-2 border border-black rounded-lg' />
                <button type='submit' className='bg-black text-white p-2 rounded-lg'>Log In</button>

            </form>
        </div>
    )
}


export { LogIn }