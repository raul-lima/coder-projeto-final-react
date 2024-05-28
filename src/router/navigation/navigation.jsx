import { CartIcon } from "../../components/cart/CartIcon";
import "./Navigation.scss";
import { ItemListContainer } from "../../components/itemlist/ItemListContainer";

export function Navigation() {
  return (
    <>
      <nav className="navigation">
        <div className="logo-container">
          <img src="src\assets\image-removebg-preview.png" alt="Logo do site" />
        </div>
        <div className="nav-links">
          <a className="nav-links__link">Home</a>
          <a className="nav-links__link">Lanches</a>
          <a className="nav-links__link">Grelhados</a>
          <a className="nav-links__link">Pizzas</a>
          <a className="nav-links__link">Bebidas</a>
          <a className="nav-links__link">Sobremesas</a>
          <div className="cart-container">
            <CartIcon />
            <ItemListContainer />
          </div>
        </div>
      </nav>
    </>
  );
}
