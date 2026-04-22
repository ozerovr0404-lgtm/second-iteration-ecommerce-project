import './SortProduct.css';

function SortProduct ({ count }) {
    return (
      <div className='top-line-product-card-cont'>
        <div className='product-counter'>
          {`${count} products`}
        </div>
        <div className='sort-text-and-select'>
          <p className='paragraph-style-by-sort'>Sort by:</p>
        </div>
        <select className='sort-select'>
          <option value="none">Sort by</option>
          <option value="high">Price: High to Low</option>
          <option value="low">Price: Low to High</option>
        </select>
      </div>
    )
};

export default SortProduct;