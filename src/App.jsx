import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemListContainer from "./componentes/pages/itemListContainer/itemListContainer";
import { Navbar } from "./componentes/layout/navbar/Navbar";
import Cart from "./componentes/pages/cart/Cart";
import ItemDetailContainer from "./componentes/pages/itemDetailContainer/ItemDetailContainer";

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Navbar/>}>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:id" element={<ItemListContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        </Route>
          <Route path="*" element={<h1>Esta ruta no existe</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
