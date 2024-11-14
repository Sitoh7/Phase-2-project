import { useState, useEffect } from "react";
import { Outlet, useOutletContext } from "react-router-dom"
import ItemCard from "../components/ItemCard"
import Search from "../components/Search";
import Parts from "../components/Parts"
function Home(){
       
const[carParts, setCarParts] = useState([]);
const [allCarParts, setAllCarParts] = useState([]);
const [noResults, setNoResults] = useState(false);


function fetchParts(){
fetch("http://localhost:3000/carParts")
.then(res => res.json())
.then(carParts =>{ setCarParts(carParts)
                   setAllCarParts(carParts)
                  setNoResults(false)
})
}

useEffect(()=>{
    fetchParts()
},[])

    function partSearch(search){
      
        console.log(search)
        if(search){
          
            const searchedCarParts = allCarParts.filter(part=>{return part.name.toLowerCase().includes(search.toLowerCase())})
            setCarParts(searchedCarParts)
            setNoResults(searchedCarParts.length === 0)
            
          }
          else{
            setCarParts(allCarParts)
            setNoResults(false);
          }

    }


 


    return(<>
    
    <Search partSearch={partSearch}  />
     <Outlet/>   
     {noResults ? (
        <div style={{
          textAlign: 'center',
          padding: '20px',
          marginTop: '20px',
          fontSize: '1.2rem',
          color: '#666'
        }}>
          Item not found
        </div>
      ) : (
        <Parts carParts={carParts}  />
      )}
 
    </>)
}

export default Home