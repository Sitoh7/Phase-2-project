import React, { useState, useEffect } from "react";

function CartItem({ name, image, price, id, removeCart, updateItemTotal }) {
  const [quantity, setQuantity] = useState(1);
  const total = quantity * price;

  useEffect(() => {
    updateItemTotal(total,id);
  }, [total, updateItemTotal]);

  function handleQuantityChange (newQuantity){
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <article >
      <div className="productInfo">
        <img
          src={image}
          className="productImage"
          alt={name}
        />
        <div className="productDetails">
          <h2 className="productName">{name}</h2>
          <p className="productPrice">${price}</p>
          <p>Quantity: {quantity}</p>
          <div className="flex items-center gap-1">
            <button className="productButton px-3 py-1 bg-green-500 hover:bg-green-600 rounded-l" onClick={() => handleQuantityChange(quantity + 1)}>+</button>
            <button className="productButton px-3 py-1 bg-green-500 hover:bg-green-600 rounded-r border-l border-green-600" onClick={() => handleQuantityChange(quantity - 1)}>-</button>
          </div>
          <p className="totalPrice">Total: ${Math.round(total * 100) / 100}</p>
          <button className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded text-sm" onClick={() => removeCart(id)}>Remove From Cart</button>
        </div>
      </div>
    </article>
  );
}

export default CartItem;