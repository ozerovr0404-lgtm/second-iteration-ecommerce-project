import './Listing.css';
import ProductCard from './productCard/ProductCard';
import Sidebar from './sidebar/Sidebar';
import SpecialOffer from './specialOffer/SpecialOffer';
import SortProduct from './sortProduct/SortProduct';
import ProductGrid from './productGrid/ProductGrid';
import products  from '../../data/products'; 

function Listing ({ pageType }) {

  const baseProducts  = products.filter(prod => prod.category === pageType);
  const sortedProducts = baseProducts;
  const brands = [...new Set(baseProducts .map(pr => pr.brand))];

    return (
      <div className='pagebody-conteiner'>
        <div className='coloumn-left-container'>
          <Sidebar
            brands={brands}
          />
          <SpecialOffer />
        </div>
        <div className='general-product-container'>
          <SortProduct
            count={sortedProducts.length}
          />

          <div className='product-cards-main-container'>
            <ProductGrid>
              {sortedProducts.map( product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ProductGrid>
          </div>
          
        </div>
      </div>
    )
}

export default Listing;