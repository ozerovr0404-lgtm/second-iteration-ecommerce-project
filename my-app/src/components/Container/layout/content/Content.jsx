import Listing from "../../../Listing/Listing";
import UserCart from "../../userCart/UserCart";

function Content ({ pageType, cartItems, addProdToCart, increaseQty, decreaseQty, removeFromCart, setPageType }) {

  if (pageType === 'cart') {
    return <UserCart cartItems={cartItems} increaseQty={increaseQty} decreaseQty={decreaseQty} removeFromCart={removeFromCart} setPageType={setPageType} />
  }

  return  <Listing
            key={pageType}
            pageType={pageType} 
            addProdToCart={addProdToCart} 
            cartItems={cartItems}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
          />
}

export default Content;