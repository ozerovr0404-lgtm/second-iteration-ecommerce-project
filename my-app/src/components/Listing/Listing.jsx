import { useState } from 'react';
import './Listing.css';
import ProductCard from './productCard/ProductCard';
import Sidebar from './sidebar/Sidebar';
import SpecialOffer from './specialOffer/SpecialOffer';
import SortProduct from './sortProduct/SortProduct';
import ProductGrid from './productGrid/ProductGrid';
import products  from '../../data/products'; 

function Listing ({ pageType, addProdToCart, cartItems, increaseQty, decreaseQty }) {

  const [filterMinPrice, setFilterMinPrice] = useState(0);
  const [filterMaxPrice, setFilterMaxPrice] = useState(5000);
  const [appliedMinPrice, setAppliedMinPrice] = useState(0);
  const [appliedMaxPrice, setAppliedMaxPrice] = useState(5000);
  const [filteredBrands, setFilteredBrands] = useState('');
  const [appliedBrands, setAppliedBrands] = useState('');
  const [sortedPrice, setSortedPrice] = useState('low to high');

  const baseProducts = products.filter(prod => prod.category === pageType);
  const brands = [...new Set(baseProducts .map(pr => pr.brand))];

  const filteredProductOnPrice = baseProducts.filter(p => {
    const price = p.price;
    return (
      (appliedMinPrice === '' || price >= Number(appliedMinPrice)) &&
      price <= Number(appliedMaxPrice) &&
      (appliedBrands === '' || p.brand === appliedBrands)
    )
  });

  const sortedProducts = [...filteredProductOnPrice].sort((a, b) => {
    return sortedPrice === 'low to high' 
    ? a.price - b.price 
    : b.price - a.price
  })

  const appliyFilters = () => {
    setAppliedMinPrice(filterMinPrice);
    setAppliedMaxPrice(filterMaxPrice);
    setAppliedBrands(filteredBrands);
  }

    return (
      <div className='pagebody-conteiner'>
        <div className='coloumn-left-container'>
          <Sidebar
            brands={brands}
            filterMaxPrice={filterMaxPrice}
            filterMinPrice={filterMinPrice}
            setFilterMaxPrice={setFilterMaxPrice}
            setFilterMinPrice={setFilterMinPrice}
            appliyFilters={appliyFilters}
            filteredBrands={filteredBrands}
            setFilteredBrands={setFilteredBrands}
          />
          <SpecialOffer />
        </div>
        <div className='general-product-container'>
          <SortProduct
            count={filteredProductOnPrice.length}
            sortedPrice={sortedPrice}
            setSortedPrice={setSortedPrice}
          />

          <div className='product-cards-main-container'>
            <ProductGrid>
              {sortedProducts.map( product => (
                <ProductCard key={product.id} product={product} addProdToCart={addProdToCart} cartItems={cartItems} increaseQty={increaseQty} decreaseQty={decreaseQty} />
              ))}
            </ProductGrid>
          </div>
          
        </div>
      </div>
    )
}

export default Listing;