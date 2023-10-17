import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <img src="https://nikearprod.vtexassets.com/assets/vtex/assets-builder/nikearprod.store/2.0.63/icons/Assets_for_off%20platform/swoosh___33f7ffaf2fc124733c2c4a60a12a1160.svg" alt="" />
      <ul className="navbar-list">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Galeria</li>
      </ul>
      <CartWidget />
    </div>
  );
};
