import './SortProduct.css';

function SortProduct ({ count, sortedPrice, setSortedPrice }) {
    return (
      <div className='top-line-product-card-cont'>
        <div className='product-counter'>
          {`${count} products`}
        </div>
        <div className='sort-text-and-select'>
          <p className='paragraph-style-by-sort'>Sort by:</p>
        </div>
        <select 
          className='sort-select'
          value={sortedPrice}
          onChange={(e) => setSortedPrice(e.target.value)}
        >
          <option value="low to high">Price: Low to High</option>
          <option value="high to low">Price: High to Low</option>
        </select>
      </div>
    )
};

export default SortProduct;