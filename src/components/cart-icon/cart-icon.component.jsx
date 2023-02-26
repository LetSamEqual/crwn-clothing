import { useContext, useEffect, useRef } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext, setIsCartOpen } from "../../contexts/cart.contex";

import "./cart-icon.styles.scss";

const CartIcon = ({ cartItem }) => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  //logic problem?
  //toggleisCartOpen is firing at the same time as closeDropdown in cart-dropdown.component
  //meaning if open, clicking icon fires closeDropdown, making it false
  //make toggleIsCartOpen's condition true and so it opens again?

  const toggleIsCartOpen = () => {
    if (!isCartOpen) {
      setIsCartOpen(true);
    }
    return
  };

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
