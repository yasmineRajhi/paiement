import React from 'react';
import './Header.css';


/*import AiOutlineSearch from 'react-icons/ai';
import TiShoppingCart from 'react-icons/ti';*/
function Header() {
    return (
        <header className='header'>
            <div className='left'>
            {/* <img src='../images/Logo.png' alt='cloudy'/> */}
            <h3>Cloudy</h3>
            </div>
            <div className='search'>
                <input type='texte' placeholder='Search...'/>
                {/* <button><AiOutlineSearch/></button> */}
                <button>search</button>
            </div>
            <div className='right'>
                <button className='log_out_btn'>Logout</button>
            </div>
        </header>
    )
}

export default Header
