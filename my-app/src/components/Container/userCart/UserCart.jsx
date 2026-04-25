import './UserCart.css';
import ProdCardInCart from '../../Listing/prodCardInCart/ProdCardInCart';
import OrderSummary from '../../Listing/orderSummary/OrderSummary';

function UserCart () {
  return (
    <div className='main-content-in-cart'>
      <p className='title-cart-name'>
        Shopping Cart
      </p>
      <div className='main-cart-container'>
        <div className='product-card-grid-for-shopping-cart'>
          <ProdCardInCart></ProdCardInCart>
        </div>
        <OrderSummary></OrderSummary>
      </div>
    </div>
  )
};

export default UserCart;