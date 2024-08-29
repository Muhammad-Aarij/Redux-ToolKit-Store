import React, { useEffect, useState } from 'react';

export default function Product() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const resp = await fetch("https://fakestoreapi.com/products");
                const data = await resp.json(); // Await the JSON response
                setProducts(data); // Update the state with the fetched products
            } catch (error) {
                console.error("Error fetching the products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className='productsWrapper'>
            {products.map((product) => (
                <div className='card' key={product.id}>
                    <img src={product.image}></img>
                    <h4 key={product.id}>{product.title}</h4>
                    <h5 key={product.id}>{product.price}</h5>
                    <button className='btn'>Add to Cart</button>
                </div>
            ))}
        </div>
    );
}
