import React, {useState} from 'react';
import './VM.css';
import {TiShoppingCart} from 'react-icons/ti';
import { useNavigate } from "react-router-dom";
import Cart from '../Cart/Cart';
function VM() {

    let navigate = useNavigate();

    function handleClick() {
        if (Cart.length>0){
            navigate("/cart");
        }else{
            navigate("/cart-empty")
        }
      }

    const [product] = useState([{
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEedDwIW5Ldb8dbBaTcHqMBnPSMnso_6ASbsyopAtEgICTyll8EvDIPBKwrh8cFEQh5MU&usqp=CAU',
        name:'1',
        price:'25$'
    },
    {
        image:'https://images.contentstack.io/v3/assets/blt300387d93dabf50e/bltb6200bc085503718/5e1f209a63d1b6503160c6d5/containers-vs-virtual-machines.jpg',
        name:'2',
        price:'50$'
    }])

    const [Cart, setCart] = useState([])

    const AddToCart = (product)=>{
        setCart([...Cart,product])
    }
    
    return (
        <div>
            <h3>Virtual Machines</h3>
            <div className='prod_disp'>
                {product.map((product)=>(
                    <div className='products'>
                        <img src={product.image} alt={product.name}/>
                        <h3>{product.name}</h3>
                        <h4>{product.price}</h4>
                        <button onClick={()=>AddToCart(product)}>Add to Cart</button>
                    </div>
                ))
                }
            </div>
            <div className='fixedButton'>
                <span>{Cart.length}</span>
                <button className='cart' onClick={handleClick}>
                    <TiShoppingCart className='Cart__icon'/>
                </button>
            </div>
        </div>
    )
}

export default VM
