
import React, { useContext }  from "react";
import './css/shopcategory.css';
import { ShopContext } from "../context/ShopContext";
import Dropdown_icon from '../components/Assets/drop.png'
import Item from "../components/items/item";
const  Shopcategory = (props) =>{
    const {all_product} = useContext(ShopContext);
    return(
        <div className="shop-category">
         <img className="shopcategory-banner" src={props.banner} alt=" "/>
         <div className="shopcategory-indexSort">
            <p>
                <span>Showing 1-12</span> out of 36 products
            </p>
            <div className="shopcategory-sort">
                sort by <img src={Dropdown_icon} alt=" "/>
            </div>
         </div>
         <div className="shopcategory-products">
           {all_product.map((item,i)=>{
           
             return <Item Key={i}  id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
       
     
        })};
          
         </div>
         <div className="shopcategory-loadmore">
         Explore More
         </div>
        </div>
    );
};

export default Shopcategory




