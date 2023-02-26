import { useContext } from "react";

import { CartContext } from "../../contexts/cart.contex";

import CheckOutItems from "../check-out-items/check-out-items.component";

const CheckOutPage = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <div>
        <h2>Product</h2>
      </div>
      <div>
        <h2>Description</h2>
      </div>
      <div>
        <h2>Quantity</h2>
      </div>
      <div>
        <h2>Price</h2>
      </div>
      <div>
        <h2>Remove</h2>
      </div>
      <div>
        {cartItems.map((item) => {
          <CheckOutItems key={item.id} cartItem={item} />;
        })}
      </div>
    </div>
  );
};

export default CheckOutPage;
