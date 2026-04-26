import './OrderSummary.css';

function OrderSummary ({ setPageType, cartItems }) {

  const subtotal = cartItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className='order-container'>
      <p className='order-summary-title'>Order Summary</p>
      <div className='subtotal-order'>
        <p className='subtotal-title'>Subtotal</p>
        <p className='summary'>{`$${subtotal.toFixed(2)}`}</p>
      </div>
      <div className='subtotal-order'>
        <p className='subtotal-title'>Tax (8%)</p>
        <p className='summary'>{`$${tax.toFixed(2)}`}</p>
      </div>
      <div className='subtotal-order'>
        <p className='subtotal-title'>Shipping</p>
        <p className='subtotal-title-2'>Calculated at checkout</p>
      </div>
      <div className='subtotal-order-total'>
        <p className='total-title'>Total</p>
        <p className='total-price'>{`$${total.toFixed(2)}`}</p>
      </div>
      <button className='accept-button-black'>
        Proceed to Checkout
      </button>
      <button className='continue-shopping-button-white' onClick={() => setPageType('tv')} >
        Continue Shopping
      </button>
    </div>
  )
}

export default OrderSummary;