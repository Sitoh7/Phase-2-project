import React, { useState, useEffect } from 'react';

function CartItem({ name, image, price, id, removeCart, updateTotal }) {
  const [quantity, setQuantity] = useState(1);
  let total = quantity * price;

  useEffect(() => {
    updateTotal(total);
  }, [total]);

  return (
    <>
      <p>{name}</p>
      <img src={image} style={{ height: '150px', borderRadius: '5px' }} alt={name} />
      <p>{`$ ${price}`}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
      <button onClick={() => setQuantity(quantity - 1)}>-</button><br /><br />
      <p>Total: ${Math.round(total * 100) / 100}</p>
      <button onClick={() => removeCart(id)}>Remove From Cart</button>
    </>
  );
}

export default CartItem;
