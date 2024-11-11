import { Outlet, useOutletContext } from "react-router-dom"
import ItemCard from "../components/ItemCard"
import Search from "../components/Search";
function Home(){
    const carParts = useOutletContext();


    return(<>
    
    <Search/>
     <Outlet/>   
     <div style={{ display: "flex", gap: "20px", flexWrap: "wrap",  textAlign:"center",}}>
     {carParts.map(carPart => {return <ItemCard key={carPart.id} name={carPart.name} image={carPart.image} price={carPart.price}/>})}
</div>    
    </>)
}

export default Home