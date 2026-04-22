import './ProductGrid.css';

function ProductGrid ({children}) {
    return (
      <div className='main-grid-style'>
          {children}
      </div>
    )
};

export default ProductGrid;