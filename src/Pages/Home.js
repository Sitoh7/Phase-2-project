import { useState, useEffect } from "react";
import { Outlet, useOutletContext } from "react-router-dom"
import ItemCard from "../components/ItemCard"
import Search from "../components/Search";
import Parts from "../components/Parts"
function Home(){
       
const[carParts, setCarParts] = useState([]);



function fetchParts(){
fetch("http://localhost:3000/carParts")
.then(res => res.json())
.then(carParts => setCarParts(carParts))
}

useEffect(()=>{
    fetchParts()
},[])

    function partSearch(search){
        console.log(search)
        if(search){
            const searchedCarParts = carParts.filter(part=>{return part.name.toLowerCase().includes(search.toLowerCase())})
            setCarParts(searchedCarParts)
            
          }
          else{
            fetchParts()
          }

    }

 //if(!carParts) return <h1>Loading ...</h1>

  


    return(<>
    
    <Search partSearch={partSearch}/>
     <Outlet/>   
    <Parts carParts={carParts} />  
    </>)
}

export default Home