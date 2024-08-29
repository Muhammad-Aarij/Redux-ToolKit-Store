import React from 'react'
import Product from '../components/Product'
export default function Home() {
    return (
        <div>
            <h2 className='heading'>Welcome to the Redux ToolKit Store</h2>
            <section>
                <h3>Products Available</h3>
                    <Product/>
            </section>
        </div>
    )
}
