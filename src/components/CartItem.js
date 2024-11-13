import React, { useState, useEffect } from "react";

function CartItem({ name, image, price, id, removeCart, updateItemTotal }) {
  const [quantity, setQuantity] = useState(1);
  const total = quantity * price;

  useEffect(() => {
    updateItemTotal(total);
  }, [total, updateItemTotal]);

  function handleQuantityChange (newQuantity){
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <>
      <p>{name}</p>
      <img
        src={image}
        style={{ height: "150px", borderRadius: "5px" }}
        alt={name}
      />
      <p>${price}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
      <button onClick={() => handleQuantityChange(quantity - 1)}>-</button>
      <br /><br />
      <p>Total: ${Math.round(total * 100) / 100}</p>
      <button onClick={() => removeCart(id)}>Remove From Cart</button>
    </>
  );
}

export default CartItem;