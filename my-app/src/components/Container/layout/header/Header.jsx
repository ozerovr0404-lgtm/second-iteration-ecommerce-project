import './Header.css';

function Header ({ setPageType }) {
    return (
        <div className='header-main-conteiner-row'>
          <div className='conteiner-title'>
              <button 
                className='title-button'
                onClick={() => setPageType('tv')}
              >
                  TechStore
              </button>
              <button className='first-link-button'
                onClick={() => setPageType('tv')}
              >
                  TV
              </button>
              <button className='grey-group-button'
                onClick={() => setPageType('phone')}
              >
                  Phone
              </button>
              <button className='grey-group-button'
                onClick={() => setPageType('laptop')}
              >
                  Laptop
              </button>
          </div>
          <div className='conteiner-cart-and-user'>
              <button 
                className='button-icon'
                onClick={() => setPageType('cart')}
              >
                  <img src="/cart.png" alt="Упс!" />
              </button>
              <button className='button-icon'>
                  <img src="/user-icon.png" alt="Упс!" />
              </button>
          </div>
        </div>
    )
};

export default Header;