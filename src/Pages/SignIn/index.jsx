import { Layout } from "../../Components/Layout";


function SignIn() {
    return (
        <Layout>

            <h1 className="my-4 font-semibold text-2xl">SignIn</h1>

            <form action="" className='flex flex-col gap-4 p-4 border shadow-xl shadow-gray-500 rounded-lg w-[300px]'>
                <label htmlFor="text">Usuario</label>
                <input type="text" name="usuario" id="usuario" placeholder='Usuario' className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none' />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder='Password' className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none' />
                <button type='submit' className='bg-black text-white p-2 rounded-lg'>Log In</button>
                <button className='bg-emerald-400 text-white p-2 rounded-lg'>Registe</button>
            </form>

        </Layout>
    )
}
export { SignIn };