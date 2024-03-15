import { heroJastip, mieGacoan } from "../constants";
import { layout, styles } from "../styles";
import Card from "./Card";
import CardItemRow from "./CardItemRow";
import HeroProduct from "./HeroProduct";

const Jastip = () => {
  return (
    <section className={`${layout.section}`}>
      <h1 className={`${styles.heading1}`}>Jasa Titip</h1>
      <HeroProduct img={heroJastip.img} deskripsi={heroJastip.deskripsi}/>
      <Card styles={`grid-cols-1 lg:grid-cols-3 pt-10`}>
        {
          mieGacoan.map((mg) => (
            <CardItemRow key={mg.id} name={mg.name} img={mg.img} ex='jpg'/>
          ))
        }
      </Card>
    </section>
  )
}

export default Jastip;