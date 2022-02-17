import cartContent from "./cart-content";
import CartContext from "./cart-content";

// Allow us to wrap any component that needs access to the context with card provider component and can add logic for managing
//context data
const CartProvider = (props) => {
    const cartContext = {
        items: [],
        totalAmounts
    }

  return   <CartContext.Provider>
        {props.children}
    </CartContext.Provider>
}