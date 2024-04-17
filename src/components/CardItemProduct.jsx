import { styles } from "../styles";

const CardItem = ({img, name, ex}) => {
    return(
    <>
      <div data-aos="fade-up">
        <div className="max-w-[10rem] py-10 bg-[#dde3ff] rounded-sm flex justify-center items-center" >
          <img src={`./images/${img}.${ex}`} alt={`${name}`} className="flex justify-center w-[500px]" />
        </div>
        <h1 className={`${styles.heading3}`}>{name}</h1>     
      </div>
     </>
    )

}

export default CardItem;