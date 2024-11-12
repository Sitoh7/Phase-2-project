
function ItemCard({name,price,image,toCart,id}){

    return(
        <div >
       
        <h1 style={{fontSize:"20px",}}>{name}</h1>
        <img src={image} style={{ height: "150px", borderRadius:"5px", }} alt={name}/>
        <p>{`$ ${price}`}</p>
       <button onClick={()=>toCart(name,image,price,id)}>Add To Cart🛒</button>
        </div>
        )
}

export default ItemCard