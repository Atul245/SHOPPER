import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Shopcontext } from "../../context/Shopcontext";


const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(Shopcontext);
    return (
        <nav className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => {setMenu("shop")}}>
                    <Link style={{textDecoration: 'None'}} to='/'>Shop</Link>{menu ==="Home"?<hr/>:<></>}
                </li>
                <li onClick={() => {setMenu("Kids")}}>
                    <Link style={{textDecoration: 'None'}} to='/kids'>Kids</Link>{menu ==="Kids"?<hr/>:<></>}
                </li>
                <li onClick={() => {setMenu("Women")}}>
                    <Link style={{textDecoration: 'None'}} to='/womens'>Women</Link>{menu ==="Women"?<hr/>:<></>}
                </li>
                <li onClick={() => {setMenu("Men")}}>
                    <Link style={{textDecoration: 'None'}} to='/men'>Men</Link>{menu ==="Men"?<hr/>:<></>}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </nav>
    );
}

export default Navbar;
