import ShoppingIcon from "../../assets/shopping-cart-simple.svg";
import "./CartIcon.scss";

export function CartIcon() {
  return (
    <>
      <img className="cart-icon" src={ShoppingIcon} alt="" />
    </>
  );
}
