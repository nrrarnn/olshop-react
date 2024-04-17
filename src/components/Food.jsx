import { food, heroFood } from "../constants";
import { styles } from "../styles";
import Card from "./Card";
import CardItemRow from "./CardItemRow";
import HeroProduct from "./HeroProduct";

const Food = () => {
  return(
    <>
    <section className="mt-10">
      <h1 className={`${styles.heading1}`}>Food</h1>
      <HeroProduct img={heroFood.img} deskripsi={heroFood.deskripsi}/>
      <Card styles={`grid-cols-1 lg:grid-cols-3 pt-10`}>
        {
          food.map((f) => (
            <CardItemRow key={f.id} name={f.name} img={f.img} ex='jpg'/>
          ))
        }
      </Card>
    </section>
    </>
  )
}

export default Food;