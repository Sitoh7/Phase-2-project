import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App(){
    
    return(
        <>
            <header>
                <NavBar />
            </header>
            {/* <Outlet context={users}/> */}
            <Outlet/>
        </>
    );
};

export default App;