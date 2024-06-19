import './newCollections.css'
import HTML from '../Assets/html2.png';
import CSS from '../Assets/css2.png';
import JS from '../Assets/js1.png';
import NODE from '../Assets/node2.png';
import C from '../Assets/c5.png';
import C_logo from '../Assets/c6.png';
import Mongodb from '../Assets/mongodb.png';
import PHP from '../Assets/php2.png';
import Phython from '../Assets/phython2.png';
import React from '../Assets/React1.png';
const newCollections = () => {
    return(
        <div className="new_collections">
            <h1>NEW COLLECTION</h1>
            <hr />
            <div className="collection">
              <img src={HTML} alt=''/>
              <img src={CSS} alt=''/>
              <img src={JS} alt=''/>
              <img src={NODE} alt=''/>
              <img src={C} alt=''/>
              <img src={C_logo} alt=''/>
              <img src={Mongodb} alt=''/>
              <img src={PHP} alt=''/>
              <img src={Phython} alt=''/>
              <img src={React} alt=''/>
            </div>
        </div>
    )
}

export default newCollections








