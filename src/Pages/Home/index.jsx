import { useState, useEffect } from 'react'
import {Layout} from '../../Components/Layout'
import { Card } from '../../Components/Card'

function Home() {
    const [items, setItems] = useState(null)

    // Fetching data from the API
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    return (
        <Layout>
            Home
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                {
                    items?.map(item => (
                        //aca se esta pasando el item como prop
                        <Card key={item.id} data={item} />
                    ))
                }
            </div>
        </Layout>
    )
}

export { Home }