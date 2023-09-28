import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <h4>logo</h4>
      <ul className="navbar-list">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Galeria</li>
      </ul>
      <CartWidget />
    </div>
  );
};
