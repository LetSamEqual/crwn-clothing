const CheckOutItems = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
console.log(cartItem)
  return (
    <div>
      <div>
        <img src={imageUrl} alt={`${name}`} />
        <div>
          <span>{name}</span>
          <span>
            {quantity} x ${price}
          </span>
        </div>
        <span>{quantity}</span>
      </div>
    </div>
  );
};

export default CheckOutItems;
