import React from 'react';
import './Empty.css';
import {BsCartX} from 'react-icons/bs';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
function Empty() {
    let navigate = useNavigate;

    function handleClick(){
        navigate('/')
    }
    return (
        <div className='Cart'>
            <h2 className='Page__header'>My Cart</h2>
            <BsCartX className='cart__icon'/>
            <div className='Page__warn'>
                <h3>Oops! Your cart is empty!</h3>
                <p>Looks like you haven't added anything to your cart yet</p>
            </div>
            <Link to='/'><button className='shop'>Shop Now</button></Link>
        </div>
    )
}

export default Empty
