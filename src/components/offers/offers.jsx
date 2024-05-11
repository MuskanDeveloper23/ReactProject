

 import './offers.css'
 import excusive_img from  '../Assets/C4.png'
const offers = () => {
    return(
        <div className="offers">
        <div className="offers-left">
         <h1>Execusive</h1>
         <h1>Offers For You </h1>
         <p>ONLY ON BEST SELLERS PRODUCTS</p>
         <button> Check now </button>
        </div>
    <div className="offers-right">
    <img src={ excusive_img} alt=" "/>

    </div>

        </div>
    )
}
export default offers