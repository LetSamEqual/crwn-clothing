import { useContext, useRef, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.contex";

import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
    setIsCartOpen(false)
  };

  //logic problem?
  //toggleisCartOpen is firing at the same time as closeDropdown in cart-dropdown.component
  //meaning if open, clicking icon fires closeDropdown, making it false
  //make toggleIsCartOpen's condition true and so it opens again?

  const ref = useRef('')

  useEffect(()=>{

    const closeDropdown = (e) => {
      if(!ref.current.contains(e.target)){
        setIsCartOpen(false)
      }
    }
    document.addEventListener('mousedown', closeDropdown)

    return () => {
      document.removeEventListener('mousedown', closeDropdown)
    }
  }, [])


  return (
    <div ref={ref} className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECK-OUT</Button>
    </div>
  );
};

export default CartDropdown;
