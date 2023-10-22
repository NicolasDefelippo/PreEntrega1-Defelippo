import { useEffect, useState } from "react";
import { products } from "../../../productsMock"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

  const [items, setItems] = useState([]);

  const { id } = useParams();

  useEffect(() => {

    const productosFiltrados = products.filter( product => product.category === id)
    
    const tarea = new Promise((resolve, reject) => {
      resolve(id ? productosFiltrados : products);
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));

  }, [id]);

  return <ItemList items = {items}/>
};

export default ItemListContainer;