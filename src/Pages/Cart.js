import { useState, useEffect } from 'react';
import CartItem from '../components/CartItem';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubTotal] = useState(0);

  function fetchCart() {
    fetch('http://localhost:3000/Cart')
      .then(resp => resp.json())
      .then(cartItems => setCartItems(cartItems));
  }

  useEffect(fetchCart, []);

  function removeCart(id) {
    fetch(`http://localhost:3000/Cart/${id}`, {
      method: 'DELETE',
    }).then(() => fetchCart());
  }

  function updateTotal(price) {
    setSubTotal(subtotal + price);
  }

  let tax = Math.floor(subtotal * 0.15);
  let shipping = 5.99;

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
          updateTotal={updateTotal}
        />
      ))}
      {cartItems.length === 0 ? <h1>Your Cart is Empty</h1> : null}
      <div style={{ visibility: cartItems.length === 0 ? 'hidden' : 'visible' }}>
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
