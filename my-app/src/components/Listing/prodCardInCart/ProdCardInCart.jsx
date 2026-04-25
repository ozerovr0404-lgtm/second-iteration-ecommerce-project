import './ProdCardInCart.css';
import products from '../../../data/products';

function ProdCardInCart () {

  const images = products.images;

  return (
    <div className='shopping-product-container'>
      <img src={images} className='image-card-for-shopping-cart'/>
    </div>
  )
};

export default ProdCardInCart;