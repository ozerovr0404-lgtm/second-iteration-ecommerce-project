import './Sidebar.css'

function Sidebar ({ brands }) {

    const handleFilteredSubmit = (e) => {
    e.preventDefault()
    return console.log(`Фильтр применён!`)
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
              <select className='filter-pb-select'>
                  <option value=""></option>
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
                className='textarea-st-1'
                placeholder='0' 
                type="number"
                min="0"
                />
                <input 
                className='textarea-st-2'
                placeholder='5000' 
                type="number"
                min="0"
                />
              </div>
              <button className='filter-apply-butt'>
                Apply Filters
              </button>
            </form>
          </div>
        </div>
    )
};

export default Sidebar;