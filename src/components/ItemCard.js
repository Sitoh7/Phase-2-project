
function ItemCard({name,price,image}){

    return(
        <div >
       
        <h1 style={{fontSize:"20px",}}>{name}</h1>
        <img src={image} style={{ height: "150px", borderRadius:"5px", }} alt={name}/>
        <p>{`$ ${price}`}</p>
       <button>Add To Cart🛒</button>
        </div>
        )
}

export default ItemCard