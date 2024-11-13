import { Outlet, useOutletContext } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CartItem from "../components/CartItem";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotals, setCartTotals] = useState({});

  function fetchCart() {
    fetch("https://json-server-template-1-57bu.onrender.com/Cart")
      .then(resp => resp.json())
      .then(cartItems => setCartItems(cartItems));
  }

  useEffect(fetchCart, []);

  function removeCart(id) {
    fetch(`https://json-server-template-1-57bu.onrender.com/Cart/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setCartTotals(prev => {
          const newTotals = { ...prev };
          delete newTotals[id];
          return newTotals;
        });
        fetchCart();
      });
  }

 
  const subtotal = Object.values(cartTotals).reduce((sum, total) => sum + total, 0);
  const tax = Math.floor(subtotal * 0.15);
  const shipping = 5.99;

  return (
    <>
      <h1>Cart:</h1>
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          image={item.image}
          price={item.price}
          id={item.id}
          removeCart={removeCart}
          updateItemTotal={(total) => {
            setCartTotals(prev => ({
              ...prev,
              [item.id]: total
            }));
          }}
        />
      ))}
      {cartItems.length === 0 ? <h1>Your Cart is Empty</h1> : null}
      <div style={{ visibility: cartItems.length === 0 ? "hidden" : "visible" }}>
        <p>Order Summary</p>
        <p>Subtotal: ${Math.round(subtotal * 100) / 100}</p>
        <p>Tax: ${tax}</p>
        <p>Shipping: ${shipping}</p>
        <p>Total: ${Math.round((subtotal + tax + shipping) * 100) / 100}</p>
      </div>
    </>
  );
}

export default Cart;