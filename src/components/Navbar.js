import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div style={{ display: "flex", alignItems: "space-between", justifyContent: "space-between", border: "2px solid grey", padding: 20, borderRadius: 10 }}>
            <span >Redux Store</span>

            <div>
                <Link className='navLink' to="/">Home</Link>
                <Link className='navLink' to="/cart">Cart</Link>
                <span className='cartCount'>Cart Items : 0</span>
            </div>

        </div>
    )
}
