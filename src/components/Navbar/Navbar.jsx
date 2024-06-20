
import './Navbar.css'
import logo from '../Assets/shop.png';
import {GiHamburgerMenu} from "react-icons/gi";
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const [showMediaIcons,  setShowMediaIcons]= useState(false);

    return (
        <div className="navbar">
            <div className="nav-logo" >
                <img src={logo} alt=" " />
                <p>shopper</p>
            </div>
            
            <ul className= {showMediaIcons ? "nav-menu  mobile-menu-link" : "nav-menu img_box"} >
                <li onClick={() => { setMenu("Home") }}><Link style={{ textDecoration: 'none' }} to='/home'>Home</Link>{menu === "home" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("About us") }}><Link style={{ textDecoration: 'none' }} to='/about us'>About Us</Link>{menu === "mens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("services") }}><Link style={{ textDecoration: 'none' }} to='/services'>Services</Link>{menu === "womens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("Benefits") }}><Link style={{ textDecoration: 'none' }} to='/benefits'>Benefits</Link>{menu === "benefits" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("Enroll Now") }}><Link style={{ textDecoration: 'none' }} to='/enroll now'>Enroll Now</Link>{menu === "enroll now" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("Contact Us") }}><Link style={{ textDecoration: 'none' }} to='/contact us'>Contact Us</Link>{menu === "login" ? <hr /> : <></>}</li>
                <div class="nav-login-card">
                <Link to='/login'><button>Login</button></Link></div>
            </ul>
           
                
                <div className="hamburgerMenu">
                    <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}><GiHamburgerMenu /></a>

                </div>
        </div>
        


    )
}

export default Navbar