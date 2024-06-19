import React from 'react';
import './Popular.css';
import code from '../Assets/Web.jpg';
import finger from '../Assets/finger.jpg';
import coder from '../Assets/coder.jpeg';

const Popular = () => {
    return(
        <div className="Popular">
            <h1>Welcome to Novum Pharma Vision</h1>
            <hr />
            <div className="home">
            <p><i>Welcome to <span>Novum Pharma Vision</span>, your gateway to excellence in the pharmaceutical industry. At Novum Labs, we are dedicated to empowering professionals through our comprehensive service, designed to elevate your career and entrepreneurial aspirations. Whether you're a medical representative seeking specialized training, a self-employed professional aiming to grow your pharma business, or an aspiring entrepreneur with innovative ideas, Novum Pharma Vision offers tailored programs to meet your needs. Our expert-led courses and support services provide the knowledge, skills, and tools necessary to succeed in this dynamic sector. Join us on your journey to success and innovation in the pharmaceutical world.</i></p>
           <div className='images'>
            <img src={finger} alt=''/>
            <img src={code} alt=''/>
            <img src={coder} alt=''/>
            </div>
            </div>
           
        </div>
    )
}

export default Popular