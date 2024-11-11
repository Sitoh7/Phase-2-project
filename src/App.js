import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App(){
    
const[carParts, setCarParts] = useState([]);

fetch("http://localhost:3000/carParts")
.then(res => res.json())
.then(carParts => setCarParts(carParts))


    return(
        <>
            <header>
                <NavBar />
            </header>
            {/* <Outlet context={users}/> */}
            <Outlet context={carParts}/>
        </>
    );
};

export default App;