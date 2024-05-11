
import React from 'react'




import './footer.css'
import footer_logo from '../Assets/shop.png'
import pintester from '../Assets/pin2.png'
import insta from '../Assets/insta.png'
import whatshapp from '../Assets/w1.png'
const Footer = () =>{
    return(
        <div className='footer'>
            <div className="footer-logo">
        <img src={footer_logo} alt=' '/>
        <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-container-icon">
                <img src={pintester} alt=" "/>
            </div>

            <div className="footer-container-icon">
                <img src={insta} alt=" "/>
            </div>

            <div className="footer-container-icon">
                <img src={whatshapp} alt=" "/>
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p> copyright @ 2023 -All Right Reserved. </p>
        </div>
        </div>
    )
}
export default Footer
