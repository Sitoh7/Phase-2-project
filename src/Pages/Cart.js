import { Outlet, useOutletContext } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CartItem from "../components/CartItem";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotals, setCartTotals] = useState({});
  const [checkoutMessage, setCheckoutMessage] = useState("");
  const userData = JSON.parse(localStorage.getItem('userData')); 


  function fetchCart() {
    fetch("https://json-server-template-gada.onrender.com/Cart")
      .then(resp => resp.json())
      .then(cartItems => setCartItems(cartItems));
  }

  useEffect(fetchCart, []);

  function removeCart(id) {
    fetch(`https://json-server-template-gada.onrender.com/Cart/${id}`, {
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

  function handleCheckout() {
    // Delete all items from the cart
    Promise.all(
      cartItems.map(item =>
        fetch(`https://json-server-template-gada.onrender.com/Cart/${item.id}`, {
          method: "DELETE",
        })
      )
    ).then(() => {
      setCartItems([]);
      setCartTotals({});
      setCheckoutMessage(
  `Confirmed ${userData.name}, your items will be arriving soon to ${userData.address} via ${userData.deliveryOption} delivery option. Thank you for shopping with us!
  You can track your order by clicking the link we sent to your email address: ${userData.email}`);
      console.log(userData);
      
      setTimeout(() => setCheckoutMessage(""), 60000);
    });
  }

  function updateItemTotal(total,id) {
    setCartTotals(prev => ({
      ...prev,
      [id]: total
    }));
  }

  const subtotal = Object.values(cartTotals).reduce((sum, total) => sum + total, 0);
  const tax = Math.floor(subtotal * 0.15);
  const shipping = 5.99;

  return (
    <>
      <h1>Cart:</h1>
      {checkoutMessage && (
        <div className="text-green-600 text-lg font-medium my-4">
          {checkoutMessage}
        </div>
      )}
       <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", textAlign: "center" }}>
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          image={item.image}
          price={item.price}
          id={item.id}
          removeCart={removeCart}
          updateItemTotal={updateItemTotal}
        />
      ))}
      </div>
      {cartItems.length === 0 && !checkoutMessage && <h1>Your Cart is Empty</h1>}
      <div  className="order-summary" style={{ visibility: cartItems.length === 0 ? "hidden" : "visible" }}>
        <h2>Order Summary</h2>
        <b><p>Subtotal: ${Math.round(subtotal * 100) / 100}</p>
        <p>Tax: ${tax}</p>
        <p>Shipping: ${shipping}</p>
        <p>Total: ${Math.round((subtotal + tax + shipping) * 100) / 100}</p></b>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </>
  );
}

export default Cart;