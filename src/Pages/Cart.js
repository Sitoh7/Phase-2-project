import { Outlet, useOutletContext } from "react-router-dom"
import React,{useState,useEffect} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CartItem from "../components/CartItem"

function Cart(){

 const[cartItems,setCartItems]=useState([])
 const[subtotal,setSubTotal]=useState(0)

  function fetchCart(){
    fetch("http://localhost:3000/Cart")
    .then(resp=>resp.json())
    .then(cartItems=>setCartItems(cartItems))
  }

useEffect(fetchCart,[])

function removeCart(id){
    fetch(`http://localhost:3000/Cart/${id}`,{
        method:"DELETE",
       }
    )
    .then(()=>fetchCart())
}

     function updateTotal(x){
        setSubTotal(subtotal+x)
    }
    
    let tax = Math.floor(subtotal*0.15)
    let Shipping = 5.99


    return(<>
    <h1>Cart:</h1>
    {cartItems.map(item=>{return <CartItem key={item.id} name={item.name} image={item.image} price={item.price} id={item.id} removeCart={removeCart} updateTotal={updateTotal}/>})}
   <div>
        <p>Order Summary</p>
        <p>Subtotal:{Math.round(subtotal * 100) / 100}</p>
        <p>Tax:{tax}</p>
        <p>Shipping:{Shipping}</p>
        <p>Total:{Math.round((subtotal+tax+Shipping) * 100) / 100}</p>

   </div>
   
    </>)
}

export default Cart