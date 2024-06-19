import './css/shopcategory.css';
import Coder from '../components/Assets/coder1.PNG';
import Coder2 from '../components/Assets/coder5.jpg';
import Coder3 from '../components/Assets/coder3.PNG';
import Coder4 from '../components/Assets/coder4.jpg';
import Coder5 from '../components/Assets/coder.jpeg';
import Coder6 from '../components/Assets/code.jpg';
import Student from '../components/Assets/student2.PNG';
import Teacher from '../components/Assets/student4.jpg';
import StudentGroup from '../components/Assets/student3.jpg';


const Shopcategory = (props) => {
  const renderServices = () => (
    <div className='about-us'>
      <h1>Service</h1>
      <hr />
      <div className='pera'>
        <p><i>At <span>**Novum Pharma Vision**</span>, we offer an integrated program designed to cater to various professional needs within the pharmaceutical industry. Our services encompass comprehensive training programs for medical representatives, support for self-employed pharma business ventures, and tailored guidance for aspiring pharma entrepreneurs.</i></p>
        <p><i><span>**Medical Representative Training**</span>: Our training programs for medical representatives are meticulously designed to enhance both technical knowledge and soft skills. Participants gain a deep understanding of pharmacology, product knowledge, and the healthcare landscape. In addition, we focus on essential skills such as communication, sales techniques, and customer relationship management. Through interactive workshops, real-world simulations, and expert-led sessions, we prepare individuals to excel in their roles and achieve their career aspirations. </i></p>
      </div>

      <div className='common-box'>
        <div className='common1'>
        <img src={Student} alt=''/>
        <img src={StudentGroup} alt=''/>
        <div className='pera2'>
        <p className='pera2'><i><span>**Guidance for Aspiring Pharma Entrepreneurs**</span>: Novum Pharma Vision is dedicated to nurturing the next generation of pharma entrepreneurs. Our entrepreneurial guidance programs are designed to foster innovation and provide the tools necessary for successful startup ventures. We offer mentorship from industry experts, access to networking opportunities, and insights into the latest industry trends. Our comprehensive approach covers everything from ideation and business planning to funding and scaling. Aspiring entrepreneurs receive personalized support to turn their innovative ideas into thriving businesses.
          Through our integrated program, Novum Pharma Vision empowers individuals at every stage of their professional journey in the pharmaceutical industry, helping them achieve excellence and drive innovation.</i></p>
        </div></div>
        <div className='common2'>
        <p><i><span>**Support for Self-Employed Pharma Professionals**</span>: For those venturing into self-employment within the pharma sector, Novum Pharma Vision provides robust support systems. We offer business development resources, market analysis, and strategic planning assistance to help professionals establish and grow their ventures. Our support services include financial planning, regulatory compliance guidance, and marketing strategies tailored to the pharmaceutical market. By leveraging our expertise, self-employed professionals can navigate challenges and capitalize on opportunities with confidence.</i></p>
       <img src={Teacher} alt=''/>
     </div>
      </div>


</div>
  );





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
            <img src={Coder} alt=" " />
            <h3>Anukal Web developer Computer Science Degree Guider</h3>
            <p>Lorem ipsum dolor sit amet </p>

          </div>
          <div className="inner_box">
            <img src={Coder3} alt=" " />
            <h3>Kiran Web developer Computer Science Degree Guider</h3>
            <p>Lorem ipsum dolor sit amet   </p>
          </div>
        </div>


        <div className="second-box" style={{
          width: '80%',
          height: '24rem',
          marginTop: '2rem',
          marginLeft: '-2rem',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundImage: `url(${Coder2})`,
          boxShadow: '0.1em 0.1em 0.5em 0.2em #000', 
        }}>
          <h3><a href="#"> How to become a cloud developer: salary,Education and Job Outlook</a></h3>
        </div>





        <div className='innerbox'>
          <div className="inner_box">
            <img src={Coder5} alt=" " />
            <h3>Anukal Web developer Computer Science Degree Guider</h3>
            <p>Lorem ipsum dolor sit amet </p>

          </div>
          <div className="inner_box">
            <img src={Coder6} alt=" " />
            <h3>Kiran Web developer Computer Science Degree Guider</h3>
            <p>Lorem ipsum dolor sit amet   </p>
          </div>
        </div>


        <div className="second-box" style={{
          width: '80%',
          height: '24rem',
          marginTop: '2rem',
          marginLeft: '-2rem',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundImage: `url(${Coder4})`,
          boxShadow: '0.1em 0.1em 0.5em 0.2em #000', 
        }}>
          <h3><a href="#"> How to become a cloud developer: salary,Education and Job Outlook</a></h3>
        </div>
       </div>
     </div>
  );


return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt=" " />
      
      {props.category === 'about us' && renderAboutUs()}
      {props.category === 'Services' && renderServices()}

      <div className="shopcategory-products">
        {/* Products and other content */}
        {/* ... */}
        </div>
     
    </div>
  );
};

export default Shopcategory;
