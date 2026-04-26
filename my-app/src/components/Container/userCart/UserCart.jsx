import './UserCart.css';
import ProdCardInCart from '../../Listing/prodCardInCart/ProdCardInCart';
import OrderSummary from '../../Listing/orderSummary/OrderSummary';

function UserCart ({ cartItems, increaseQty, decreaseQty, removeFromCart, setPageType }) {
  return (
    <div className='main-content-in-cart'>
      <p className='title-cart-name'>
        Shopping Cart
      </p>

      <div className='main-cart-container'>
        <div className='product-card-grid-for-shopping-cart'>

          {cartItems.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            cartItems.map(item => (
              <ProdCardInCart 
                key={item.id} 
                product={item} 
                cartItems={cartItems}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
                removeFromCart={removeFromCart}
              />
            ))
          )}

        </div>
        
        <OrderSummary setPageType={setPageType} cartItems={cartItems} />
      </div>
    </div>
  )
};

export default UserCart;