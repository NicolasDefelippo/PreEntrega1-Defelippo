import { Navbar } from "./componentes/layout/navbar/Navbar";
import ItemListContainer from "./componentes/pages/itemListContainer/itemListContainer";


function App() {

  let saludo = "Hola pepito como estas"

  return (
    <div>
      <Navbar />
      <ItemListContainer saludo= {saludo} nombre = {"Nicolas"} />
    </div>
  );
}

export default App;
