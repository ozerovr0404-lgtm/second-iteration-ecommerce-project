import { useState } from 'react';
import './Container.css';
import './layout/Layout.jsx';
import Layout from './layout/Layout.jsx';

function Container () {

    const [pageType, setPageType] = useState('tv');
    const [cartItems, setCartItems] = useState([]);

    const addProdToCart = (product) => {
      setCartItems(prev => {
        const existing = prev.find(item => item.id === product.id);

        if (existing) {
          return prev.map(item =>
            item.id === product.id
            ? {...item, quantity: item.quantity + 1 }
            : item
          );
        }

        return [...prev, {...product, quantity: 1}];
      });
    }

    const increaseQty = (productId) => {
      setCartItems(prev => 
        prev.map(item => 
          item.id === productId
          ? {...item, quantity: item.quantity + 1}
          : item
        )
      );
    };

    const decreaseQty = (productId) => {
      setCartItems(prev => 
        prev.map(item => 
          item.id === productId
          ? {...item, quantity: item.quantity - 1}
          : item
        )
        .filter(item => item.quantity > 0)
      )
    }

    const removeFromCart = (productId) => {
      setCartItems(prev => prev.filter(item => item.id !== productId))
    }

    return (
      <Layout 
        pageType={pageType}
        setPageType={setPageType}
        cartItems={cartItems}
        addProdToCart={addProdToCart}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
        removeFromCart={removeFromCart}
      />
    )
};

export default Container;