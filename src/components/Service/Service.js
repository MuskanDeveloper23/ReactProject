import React from 'react';
import '../Service/Service.css'
import Coder from '../Assets/coder1.PNG';
import Coder2 from '../Assets/coder5.jpg';
import Coder3 from '../Assets/coder3.PNG';
import Coder4 from '../Assets/coder4.jpg';
import Coder5 from '../Assets/coder.jpeg';
import Coder6 from '../Assets/code.jpg';
import Dropdown_icon from '../Assets/drop.png';

const services = (props) => {
    const renderAboutUs = () => (
        <div className='about-us'>
            <h1>ABOUT US</h1>
            <hr />
            <div className='pera'>
                <p><i>Novum Labs is a leading software company committed to innovation and excellence across various industries. Our mission is to empower professionals and businesses through cutting-edge technology, expert training, and comprehensive support services. We strive to foster a culture of continuous learning and growth, ensuring our clients stay ahead in a rapidly evolving world.</i></p>
                <p><i>**Novum Pharma Vision** is our specialized service designed to elevate the pharmaceutical industry. Born from our commitment to excellence and innovation, Novum Pharma Vision aims to provide unparalleled training and support for medical representatives, self-employed pharma professionals, and aspiring entrepreneurs. Our vision is to create a community of well-equipped professionals who can navigate and thrive in the dynamic pharmaceutical sector. Through tailored programs and expert guidance, we help individuals achieve their career goals, start and grow successful businesses, and drive industry innovation. Join us and be part of a transformative journey in pharma excellence.</i></p>
            </div>
            <div className="shopcategory-products">
                <div className='innerbox'>
                    <div className="inner_box">
                        <img src={Coder} alt="Coder 1" />
                        <h3>Anukal Web developer Computer Science Degree Guider</h3>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="inner_box">
                        <img src={Coder3} alt="Coder 3" />
                        <h3>Kiran Web developer Computer Science Degree Guider</h3>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <div className="second-box" style={{
                    width: '37rem',
                    height: '24rem',
                    marginTop: '2rem',
                    marginLeft: '-2rem',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    backgroundImage: `url(${Coder2})`
                }}>
                    <h3><a href="#">How to become a cloud developer: salary, Education and Job Outlook</a></h3>
                </div>
                <div className='innerbox'>
                    <div className="inner_box">
                        <img src={Coder5} alt="Coder 5" />
                        <h3>Anukal Web developer Computer Science Degree Guider</h3>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="inner_box">
                        <img src={Coder6} alt="Coder 6" />
                        <h3>Kiran Web developer Computer Science Degree Guider</h3>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <div className="second-box" style={{
                    width: '37rem',
                    height: '24rem',
                    marginTop: '2rem',
                    marginLeft: '-2rem',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    backgroundImage: `url(${Coder4})`
                }}>
                    <h3><a href="#">How to become a cloud developer: salary, Education and Job Outlook</a></h3>
                </div>
            </div>
        </div>
    );

    return (
        <div className="shop-category">
            <img className="shopcategory-banner" src={props.banner} alt="Category Banner" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort">
                    sort by <img src={Dropdown_icon} alt="Dropdown Icon" />
                </div>
            </div>
            {props.category === 'about us' && renderAboutUs()}
            <div className="shopcategory-products">
                {/* Products and other content */}
                {/* ... */}
            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
    );
};

export default services;
