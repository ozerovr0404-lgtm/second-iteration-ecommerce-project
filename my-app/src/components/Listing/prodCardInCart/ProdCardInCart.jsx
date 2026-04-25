import './ProdCardInCart.css';
import products from '../../../data/products';

function ProdCardInCart () {

  const image = products.images;

  return (
    <div className='shopping-product-container'>
      <img src="delete-icon.svg" className='delete-cart-icon'/>
      <img src={image} className='image-card-for-shopping-cart'/>
      <div className='product-card-info-in-shopping'>
        
        <p className='brand-in-shopping-cart'>
          Vizio
        </p>
        <p className='model-in-shopping-cart'>
          M-Series 4K 65"
        </p>
        <div className='current-counter-in-shopping-cart'>
          <div className='button-container-in-shopping-cart'>
            <button className='minus-button-in-shopping-cart'>
              <img src="minus-in-cart.svg"/>
            </button>
            <div className='counter-add-product'>
              1
            </div>
            <button className='plus-button-in-shopping-cart'>
              <img src="plus-in-cart.svg" alt="" />
            </button>
          </div>
          <p className='price-product-in-shopping-cart'>
            $599
          </p>
        </div>
      </div>
    </div>
  )
};

export default ProdCardInCart;