import './ProdCardInCart.css';

function ProdCardInCart ({ product, increaseQty, decreaseQty, removeFromCart }) {

  const image = product.images[0];

  return (
    <div className='shopping-product-container'>
      <button 
        className='delete-cart-button'
        onClick={() => removeFromCart(product.id)}
      >
        <img 
          src="delete-icon.svg" 
          className='delete-cart-icon'
        />
      </button>
      <img 
        src={image} 
        className='image-card-for-shopping-cart'
      />
      <div className='product-card-info-in-shopping'>
        
        <p className='brand-in-shopping-cart'>
          {product.brand}
        </p>
        <p className='model-in-shopping-cart'>
          {product.model}
        </p>

        <div className='current-counter-in-shopping-cart'>
          <div className='button-container-in-shopping-cart'>

            <button 
              className='minus-button-in-shopping-cart'
              onClick={() => decreaseQty(product.id)}
            >
              <img src="minus-in-cart.svg"/>
            </button>

            <div className='counter-add-product'>
              {product.quantity}
            </div>

            <button 
              className='plus-button-in-shopping-cart'
              onClick={() => increaseQty(product.id)}
            >
              <img src="plus-in-cart.svg" alt="" />
            </button>

          </div>
          <p className='price-product-in-shopping-cart'>
            {`$${product.price}`}
          </p>
        </div>
      </div>
    </div>
  )
};

export default ProdCardInCart;