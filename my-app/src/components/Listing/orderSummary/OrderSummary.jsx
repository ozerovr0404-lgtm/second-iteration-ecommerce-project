import './OrderSummary.css';

function OrderSummary () {
  return (
    <div className='order-container'>
      <p className='order-summary-title'>Order Summary</p>
      <div className='subtotal-order'>
        <p className='subtotal-title'>Subtotal</p>
        <p className='summary'>$1,000.00</p>
      </div>
      <div className='subtotal-order'>
        <p className='subtotal-title'>Tax (8%)</p>
        <p className='summary'>$1,000.00</p>
      </div>
      <div className='subtotal-order'>
        <p className='subtotal-title'>Shipping</p>
        <p className='subtotal-title-2'>Calculated at checkout</p>
      </div>
      <div className='subtotal-order-total'>
        <p className='total-title'>Total</p>
        <p className='total-price'>$1,500.84</p>
      </div>
      <button className='accept-button-black'>
        Proceed to Checkout
      </button>
      <button className='continue-shopping-button-white'>
        Continue Shopping
      </button>
    </div>
  )
}

export default OrderSummary;