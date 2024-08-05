import "./CartButton.css";
// import "../../index.css";
import { FaShoppingCart } from "react-icons/fa";

const CartButton = () => {
  return (
    <button className="cart-button">
      <FaShoppingCart className="cart-icon" />
      <span>2</span>
    </button>
  );
};

export default CartButton;
