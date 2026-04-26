import './Layout.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Content from './content/Content';

function Layout ({ pageType, setPageType, cartItems, addProdToCart, increaseQty, decreaseQty, removeFromCart }) {
    return (
      <>
        <Header
          pageType={pageType}
          setPageType={setPageType}
        />
        
        <Content 
          setPageType={setPageType}
          pageType={pageType} 
          cartItems={cartItems}
          addProdToCart={addProdToCart}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          removeFromCart={removeFromCart}
        />
        
        <Footer />
      </>
    )
};

export default Layout;