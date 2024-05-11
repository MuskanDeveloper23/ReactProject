






import './newCollections.css'
import New_Collections from '../Assets/new'
import Item from '../items/item'


const newCollections = () => {
    return(
        <div className="new_collections">
            <h1>NEW COLLECTION</h1>
            <hr />
            <div className="collection">
                {New_Collections.map((item,i)=>{
                    return <Item Key={i}  id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}

export default newCollections








