import { useState, useEffect } from "react";
import { Outlet, useOutletContext } from "react-router-dom"
import ItemCard from "../components/ItemCard"
import Search from "../components/Search";
import Parts from "../components/Parts"
function Home(){
       
const[carParts, setCarParts] = useState([]);
const [allCarParts, setAllCarParts] = useState([]);
const [noResults, setNoResults] = useState(false);
const [addpart,setAddpart] = useState(false);
const[partName,setPartName] = useState("")
const[partImage,setPartImage] = useState("")
const[partPrice,setPartPrice] = useState("")
const [showPopup, setShowPopup] = useState(false);



function fetchParts(){
fetch("https://json-server-template-gada.onrender.com/carParts")
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

 function postPart(e){
  e.preventDefault()
   const newpartObj = {
    name:partName,
    image:partImage,
    price:partPrice
 
 }
 fetch("https://json-server-template-gada.onrender.com/carParts",{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify(newpartObj)
 })
 .then(()=>fetchParts())
 .then(()=> {
   setAddpart(false);
  setPartName("");
  setPartPrice("");
  setPartImage("");
  setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
 }
 )


}


    return(<>
    
    {addpart ? (<>
      <button onClick={()=>setAddpart(prev=>!prev)}>Close</button>
      <form className="addPart" onSubmit={postPart}>
        <input type="text" placeholder="Enter part name"  value={partName} onChange={(e)=>setPartName(e.target.value)}/>
        <input type="text" placeholder="Enter part price" value={partPrice} onChange={(e)=>setPartPrice(e.target.value)}/>
        <input type="text" placeholder="Enter part image" value={partImage} onChange={(e)=>setPartImage(e.target.value)}/>
        <button>Add</button>
      </form>
      </>
         ): <button onClick={()=>setAddpart(prev=>!prev)}>Add your own parts!</button>}
          {showPopup && (
                <div style={{ position: "fixed", top: "20px", right: "20px", background: "#333", color: "#fff", padding: "10px", borderRadius: "5px" }}>
                    Item added to stock ✔
                </div>
            )}
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