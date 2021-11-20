import React from 'react';
import './Cart.css';
import { useState } from 'react';
function Cart() {
    const [Cart, setCart] = useState([])
    return (
        <div className='Cart'>
            <h2 className='Page__header'>My Cart</h2>
            <div className='prod_disp'>
                {Cart.map((product)=>(
                    <div className='products'>
                        <img src={product.image} alt={product.name}/>
                        <h3>{product.name}</h3>
                        <h4>{product.price}</h4>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Cart
