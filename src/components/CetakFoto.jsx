import { foto, heroCetakFoto } from "../constants";
import { layout, styles } from "../styles";
import Card from "./Card";
import CardItemRow from "./CardItemRow";
import HeroProduct from "./HeroProduct";


const CetakFoto = () => {
  return(
    <section id="Service" className={`${layout.section}`}>
      <h1 className={`${styles.heading1}`}>Cetak Foto</h1>
      <HeroProduct img={heroCetakFoto.img} deskripsi={heroCetakFoto.deskripsi}/>
      <Card styles={`grid-cols-1 lg:grid-cols-3 pt-10`}>
        {
          foto.map((f) => (
            <CardItemRow key={f.id} name={f.name} img={f.img} ex='jpg' />
          ))
        }
      </Card>
    </section>
  )
}
export default CetakFoto;