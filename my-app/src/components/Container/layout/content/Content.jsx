import Listing from "../../../Listing/Listing";
import UserCart from "../../userCart/UserCart";

function Content ({ pageType}) {

  if (pageType === 'cart') {
    return <UserCart />
  }

  return <Listing pageType={pageType} />
};

export default Content;