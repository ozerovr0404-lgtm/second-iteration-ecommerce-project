import './Sidebar.css'

function Sidebar ({
    brands, 
    filterMaxPrice, 
    filterMinPrice, 
    setFilterMinPrice, 
    setFilterMaxPrice,
    appliyFilters,
    filteredBrands,
    setFilteredBrands
  }) {

    const handleFilteredSubmit = (e) => {
    e.preventDefault();
    appliyFilters();
  };

    return (
        <div className='filters-conteiner-in-pagebody'>
          <div className='filter-cont-in-gb-for-submit'>
            <p className='filter-label-styles'>
              Filters
            </p>
            <form onSubmit={handleFilteredSubmit} className='filter-form-styles'>
              <p className='filter-text-style'>
                Brand
              </p>
              <select 
                className='filter-pb-select'
                value={filteredBrands}
                onChange={(e) => setFilteredBrands(e.target.value)}
              >
                  <option value="">All Brands</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand} className='select-brands-output'>
                    {brand}
                  </option>
                ))}
              </select>
              <p className='filter-text-style'>
                Price Range
              </p>
              <div className='price-range-area-st'>
                <input 
                value={filterMinPrice}
                className='textarea-st-1'
                type="number"
                min="0"
                onChange={(e) => setFilterMinPrice(e.target.value)}
                />
                <input 
                value={filterMaxPrice}
                className='textarea-st-2'
                type="number"
                min="0"
                onChange={(e) => setFilterMaxPrice(e.target.value)}
                />
              </div>
              <button 
                className='filter-apply-butt'
                type='submit'
              >
                Apply Filters
              </button>
            </form>
          </div>
        </div>
    )
};

export default Sidebar;