

import './Hero.css'
import hand_icon from '../Assets/hand.png'
import arrow_icon from '../Assets/A1.png'
import hero_ima from '../Assets/M1.png'
const  Hero = () =>{
    return(
        <div className="hero">
        <div className="hero-left">
         <h2>Welcome to you my website </h2>
         <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt=" "/>
            </div>
            <p>collections</p>
            <p>for everyone</p>
         </div>
         <div className="hero-latest-btn">
            <div>Latest collections</div>
            <img src={arrow_icon} alt=" "/>
         </div>
        </div>
        <div className="hero-right">
            <img src={hero_ima} alt=" "/>
        </div>
        </div>
    )
}

export default Hero