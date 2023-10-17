import ProductCard from "../../common/productCard/ProductCard";


const ItemList = ({items}) => {

  console.log(items)

  return (
    <section style={{display: "flex", justifyContent:"space-evenly", margin: "15px"}}>

        {
            items.map( (item)=> {
                return <ProductCard key = {item.id} item={item}/>
            })
        }

    </section>
  );
};

export default ItemList;