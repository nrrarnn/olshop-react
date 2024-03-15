import { heroProdukFashion, product } from "../constants";
import { layout, styles } from "../styles";
import Card from "./Card";
import CardItem from "./CardItemProduct";
import HeroProduct from "./HeroProduct";

const Product = () => {
  return (
    <section id="Product" className={`${layout.section}`}>
        <h1 className={`${styles.heading1}`}>Fashion & Aksesoris</h1>
        <HeroProduct img={heroProdukFashion.img} deskripsi={heroProdukFashion.deskripsi}/>
        <h1 className='text-center pt-10'>Shop by Category</h1>
        <Card styles={`grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-10`}>
          
          {
          product.map((prod) => (
            <CardItem key={prod.id} name={prod.name} img={prod.img} ex='jpg' />
          )) 
          }
        </Card>
    </section>
  )
}

export default Product;