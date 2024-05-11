

import './Navbar.css'
import logo from '../Assets/shop.png'
import card_icon from '../Assets/icon.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const  Navbar = ()=>{
    const [menu,setMenu] = useState("shop");
    return(
        <div className="navbar">
            <div className="nav-logo">
            <img src={logo} alt =" "/>
            <p>shopper</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li  onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>mens</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li  onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>womens</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li  onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div class="nav-login-card">
            <Link to='/login'><button>Login</button></Link> 
                <Link to='/card'><img src={card_icon} alt=" "/></Link>
                <div className="nav-card-count">0</div>
            </div>

        </div>
    )
}

export default Navbar