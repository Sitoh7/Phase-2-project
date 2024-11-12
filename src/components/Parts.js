import ItemCard from "../components/ItemCard"

function Parts({carParts}){

    function toCart(name,image,price,id){

        const cartItem = {
            id:id,
            name:name,
            image:image,
            price:price,

    }

    fetch(`http://localhost:3000/Cart`,{
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(cartItem)
    })

}

if (carParts.length === 0) return <h1>Loading...</h1>

    return(<>
     <div style={{ display: "flex", gap: "20px", flexWrap: "wrap",  textAlign:"center",}}>
     {carParts.map(carPart => {return <ItemCard key={carPart.id} name={carPart.name} image={carPart.image} price={carPart.price} toCart={toCart} id={carPart.id}/>})}
</div>  
    </>)
}

export default Parts