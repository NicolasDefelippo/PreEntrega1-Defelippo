import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import {Link, Outlet} from "react-router-dom"

export const Navbar = () => {
  return (

    <>
    <div className="navbar">
      <Link to= "/">
      <img src="https://nikearprod.vtexassets.com/assets/vtex/assets-builder/nikearprod.store/2.0.63/icons/Assets_for_off%20platform/swoosh___33f7ffaf2fc124733c2c4a60a12a1160.svg" alt="" />
      </Link>
      <ul className="navbar-list">
        <Link to = "/">
        <li>Inicio</li>
        </Link>
        <Link to = "/category/indumentaria">
        <li>Indumentaria</li>
        </Link>
        <Link to = "/category/zapatillas">
        <li>Zapatillas</li>
        </Link>
      </ul>
      <CartWidget />
    </div>
    <Outlet/>
    </>
  );
};
